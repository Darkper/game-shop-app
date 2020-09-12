import {Component, OnInit} from '@angular/core';
import {MtxGridColumn} from '@ng-matero/extensions';
import {MatDialog} from '@angular/material/dialog';
import {Producer} from '@shared/models/producer';
import {ProducerService} from '@shared/services/producer.service';
import {ManageProducerEditComponent} from '../producer-edit/producer-edit.component';
import {ManageProducerCreateComponent} from '../producer-create/producer-create.component';

@Component({
  selector: 'app-manage-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.css']
})
export class ManageProducersComponent implements OnInit {


  producers: Producer[] = [];
  isLoading = true;

  columns: MtxGridColumn[] = [
    {header: 'Name', field: 'name'},
    {
      header: 'Actions',
      field: 'option',
      pinned: 'right',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          text: 'edit',
          icon: 'edit',
          tooltip: 'Edit',
          click: record => this.editProducer(record),
        },
        {
          type: 'icon',
          text: 'delete',
          icon: 'delete',
          tooltip: 'Remove',
          click: record => this.deleteProducer(record),
        },
      ],
    },
  ];

  constructor(private producerService: ProducerService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.producerService.getAll().then(async producers => {
      this.producers = producers;
      this.isLoading = false;
    });
  }

  async editProducer(producer: Producer) {
    this.isLoading = true;
    this.dialog.open(ManageProducerEditComponent, {
      width: 'auto',
      data: producer,
      disableClose: true,
    }).afterClosed().subscribe((result: Producer) => {
      if (!result) {
        this.isLoading = false;
        return;
      }
      const indexOf = this.producers.indexOf(producer);
      this.producers.splice(indexOf, 1, {
        id: result.id,
        name: result.name
      });
      this.isLoading = false;
    });

  }

  async deleteProducer(producer: Producer) {
    this.isLoading = true;
    await this.producerService.delete(producer).then(() => {
      const indexOf = this.producers.indexOf(producer);
      this.producers.splice(indexOf, 1);
    }).catch(reason => {
      alert(reason.error);
      console.log(reason);
    }).finally(() => this.isLoading = false);
  }

  async addProducer() {
    this.isLoading = true;
    this.dialog.open(ManageProducerCreateComponent, {
      width: 'auto',
      disableClose: true,
    }).afterClosed().subscribe((result: Producer) => {
      if (!result) {
        this.isLoading = false;
        return;
      }
      this.producerService.getAll().then(async producers => {
        this.producers = producers;
        this.isLoading = false;
      });
    });
  }
}
