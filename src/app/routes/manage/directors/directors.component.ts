import {Component, OnInit} from '@angular/core';
import {MtxGridColumn} from '@ng-matero/extensions';
import {MatDialog} from '@angular/material/dialog';
import {Director} from '@shared/models/director';
import {DirectorService} from '@shared/services/director.service';
import {ManageDirectorEditComponent} from '../director-edit/director-edit.component';
import {ManageDirectorCreateComponent} from '../director-create/director-create.component';

@Component({
  selector: 'app-manage-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})
export class ManageDirectorsComponent implements OnInit {

  directors: Director[] = [];
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
          click: record => this.editDirector(record),
        },
        {
          type: 'icon',
          text: 'delete',
          icon: 'delete',
          tooltip: 'Remove',
          click: record => this.deleteDirector(record),
        },
      ],
    },
  ];

  constructor(private directorService: DirectorService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.directorService.getAll().then(async directors => {
      this.directors = directors;
      this.isLoading = false;
    });
  }

  async editDirector(director: Director) {
    this.isLoading = true;
    this.dialog.open(ManageDirectorEditComponent, {
      width: 'auto',
      data: director,
      disableClose: true,
    }).afterClosed().subscribe((result: Director) => {
      if (!result) {
        this.isLoading = false;
        return;
      }
      const indexOf = this.directors.indexOf(director);
      this.directors.splice(indexOf, 1, {
        id: result.id,
        name: result.name
      });
      this.isLoading = false;
    });

  }

  async deleteDirector(director: Director) {
    this.isLoading = true;
    await this.directorService.delete(director).then(() => {
      const indexOf = this.directors.indexOf(director);
      this.directors.splice(indexOf, 1);
    }).catch(reason => {
      alert(reason.error);
      console.log(reason);
    }).finally(() => this.isLoading = false);
  }

  async addDirector() {
    this.isLoading = true;
    this.dialog.open(ManageDirectorCreateComponent, {
      width: 'auto',
      disableClose: true,
    }).afterClosed().subscribe((result: Director) => {
      if (!result) {
        this.isLoading = false;
        return;
      }
      this.directorService.getAll().then(async directors => {
        this.directors = directors;
        this.isLoading = false;
      });
    });
  }
}
