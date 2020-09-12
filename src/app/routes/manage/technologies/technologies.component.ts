import {Component, OnInit} from '@angular/core';
import {MtxGridColumn} from '@ng-matero/extensions';
import {MatDialog} from '@angular/material/dialog';
import {Technology} from '@shared/models/technology';
import {TechnologyService} from '@shared/services/technology.service';
import {ManageTechnologyEditComponent} from '../technology-edit/technology-edit.component';
import {ManageTechnologyCreateComponent} from '../technology-create/technology-create.component';

@Component({
  selector: 'app-manage-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class ManageTechnologiesComponent implements OnInit {

  technologies: Technology[] = [];
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
          click: record => this.editTechnology(record),
        },
        {
          type: 'icon',
          text: 'delete',
          icon: 'delete',
          tooltip: 'Remove',
          click: record => this.deleteTechnology(record),
        },
      ],
    },
  ];

  constructor(private technologyService: TechnologyService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.technologyService.getAll().then(async technology => {
      this.technologies = technology;
      this.isLoading = false;
    });
  }

  async editTechnology(technology: Technology) {
    this.isLoading = true;
    this.dialog.open(ManageTechnologyEditComponent, {
      width: 'auto',
      data: technology,
      disableClose: true,
    }).afterClosed().subscribe((result: Technology) => {
      if (!result) {
        this.isLoading = false;
        return;
      }
      const indexOf = this.technologies.indexOf(technology);
      this.technologies.splice(indexOf, 1, {
        id: result.id,
        name: result.name
      });
      this.isLoading = false;
    });

  }

  async deleteTechnology(technology: Technology) {
    this.isLoading = true;
    await this.technologyService.delete(technology).then(() => {
      const indexOf = this.technologies.indexOf(technology);
      this.technologies.splice(indexOf, 1);
    }).catch(reason => {
      alert(reason.error);
      console.log(reason);
    }).finally(() => this.isLoading = false);
  }

  async addTechnology() {
    this.isLoading = true;
    this.dialog.open(ManageTechnologyCreateComponent, {
      width: 'auto',
      disableClose: true,
    }).afterClosed().subscribe((result: Technology) => {
      if (!result) {
        this.isLoading = false;
        return;
      }
      this.technologyService.getAll().then(async technology => {
        this.technologies = technology;
        this.isLoading = false;
      });
    });
  }
}
