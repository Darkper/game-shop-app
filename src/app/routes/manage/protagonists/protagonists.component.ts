import {Component, OnInit} from '@angular/core';
import {MtxGridColumn} from '@ng-matero/extensions';
import {MatDialog} from '@angular/material/dialog';
import {Protagonist} from '@shared/models/protagonist';
import {ProtagonistService} from '@shared/services/protagonist.service';
import {ManageProtagonistCreateComponent} from '../protagonist-create/protagonist-create.component';
import {ManageProtagonistEditComponent} from '../protagonist-edit/protagonist-edit.component';

@Component({
  selector: 'app-manage-protagonists',
  templateUrl: './protagonists.component.html',
  styleUrls: ['./protagonists.component.css']
})
export class ManageProtagonistsComponent implements OnInit {

  protagonists: Protagonist[] = [];
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
          click: record => this.editProtagonist(record),
        },
        {
          type: 'icon',
          text: 'delete',
          icon: 'delete',
          tooltip: 'Remove',
          click: record => this.deleteProtagonist(record),
        },
      ],
    },
  ];

  constructor(private protagonistService: ProtagonistService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.protagonistService.getAll().then(async protagonists => {
      this.protagonists = protagonists;
      this.isLoading = false;
    });
  }

  async editProtagonist(protagonist: Protagonist) {
    this.isLoading = true;
    this.dialog.open(ManageProtagonistEditComponent, {
      width: 'auto',
      data: protagonist,
      disableClose: true,
    }).afterClosed().subscribe((result: Protagonist) => {
      if (!result) {
        this.isLoading = false;
        return;
      }
      const indexOf = this.protagonists.indexOf(protagonist);
      this.protagonists.splice(indexOf, 1, {
        id: result.id,
        name: result.name
      });
      this.isLoading = false;
    });

  }

  async deleteProtagonist(protagonist: Protagonist) {
    this.isLoading = true;
    await this.protagonistService.delete(protagonist).then(() => {
      const indexOf = this.protagonists.indexOf(protagonist);
      this.protagonists.splice(indexOf, 1);
    }).catch(reason => {
      alert(reason.error);
      console.log(reason);
    }).finally(() => this.isLoading = false);
  }

  async addProtagonist() {
    this.isLoading = true;
    this.dialog.open(ManageProtagonistCreateComponent, {
      width: 'auto',
      disableClose: true,
    }).afterClosed().subscribe((result: Protagonist) => {
      if (!result) {
        this.isLoading = false;
        return;
      }
      this.protagonistService.getAll().then(async protagonists => {
        this.protagonists = protagonists;
        this.isLoading = false;
      });
    });
  }
}
