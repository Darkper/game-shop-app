import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Client} from '@shared/models/client';
import {MtxGridColumn} from '@ng-matero/extensions';
import {ClientService} from '@shared/services/client.service';
import {MatDialog} from '@angular/material/dialog';
import {ManageClientEditComponent} from '../client-edit/client-edit.component';
import {ManageClientCreateComponent} from '../client-create/client-create.component';

@Component({
  selector: 'app-manage-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,

})
export class ManageClientsComponent implements OnInit {

  clients: Client[] = [];
  isLoading = true;

  columns: MtxGridColumn[] = [
    {header: 'Document', field: 'document'},
    {header: 'Name', field: 'name'},
    {header: 'Last Name', field: 'lastName'},
    {header: 'Phone', field: 'phone'},
    {header: 'Email', field: 'email'},
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
          click: record => this.editClient(record),
        },
        {
          type: 'icon',
          text: 'delete',
          icon: 'delete',
          tooltip: 'Remove',
          click: record => this.deleteClient(record),
        },
      ],
    },
  ];

  constructor(private clientService: ClientService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.clientService.getAll().then(async clients => {
      this.clients = clients;
      this.isLoading = false;
    });
  }

  async editClient(client: Client) {
    this.isLoading = true;

    this.dialog.open(ManageClientEditComponent, {
      width: 'auto',
      data: client,
      disableClose: true,
    }).afterClosed().subscribe((result: Client) => {
      if (!result) {
        this.isLoading = false;
        return;
      }
      const indexOf = this.clients.indexOf(client);
      this.clients.splice(indexOf, 1, {
        document: result.document,
        name: result.name,
        lastName: result.lastName,
        phone: result.phone,
        email: result.email
      });
      this.isLoading = false;
    });

  }

  async deleteClient(client: Client) {
    this.isLoading = true;
    await this.clientService.delete(client).then(() => {
      const indexOf = this.clients.indexOf(client);
      this.clients.splice(indexOf, 1);
    }).catch(reason => {
      alert(reason.error);
      console.log(reason);
    }).finally(() => this.isLoading = false);
  }

  async addClient() {
    this.isLoading = true;
    this.dialog.open(ManageClientCreateComponent, {
      width: 'auto',
      disableClose: true,
    }).afterClosed().subscribe((result: Client) => {
      if (!result) {
        this.isLoading = false;
        return;
      }
      this.clients.unshift(result);
      this.isLoading = false;
    });
  }
}
