import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ClientService} from '@shared/services/client.service';
import {GameService} from '@shared/services/game.service';
import {RentService} from '@shared/services/rent.service';
import {Rent} from '@shared/models/rent';
import {MtxGridColumn} from '@ng-matero/extensions';
import * as moment from 'moment';
import {MatDialog} from '@angular/material/dialog';
import {RentDetailsComponent} from '@shared/components/rent-details/rent-details.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DashboardComponent implements OnInit {
  game: any = {name: ''};
  client: any = {name: ''};
  rents: Rent[] = [];
  isLoading = true;

  columns: MtxGridColumn[] = [
    {header: 'Client Id', field: 'clientId'},
    {header: 'Date', field: 'date'},
    {
      header: 'Actions',
      field: 'option',
      pinned: 'right',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          text: 'view',
          icon: 'visibility',
          tooltip: 'Details',
          click: record => this.details(record),
        }
      ],
    },
  ];

  constructor(private clientService: ClientService,
              private gameService: GameService,
              private rentService: RentService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.clientService.getMoreFrequent().then(value => this.client = value).catch(reason => console.log(reason));
    this.gameService.getMoreRented().then(value => this.game = value).catch(reason => console.log(reason));
    this.rentService.getAllCurrentDay().then(value => {
      this.rents = value.map(value1 => {
        this.clientService.findById(value1.clientId).then(value2 => {
          value1.client = value2;
        });
        value1.date = moment(value1.date).format(moment.HTML5_FMT.DATE);
        return value1;
      });
    }).catch(reason => console.log(reason));
    this.isLoading = false;
  }

  details(rent: any) {
    console.log(rent);
    this.dialog.open(RentDetailsComponent, {
      width: 'auto',
      data: rent,
      disableClose: true,
    });
  }
}
