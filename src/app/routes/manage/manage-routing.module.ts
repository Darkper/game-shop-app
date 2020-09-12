import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ManageClientsComponent} from './clients/clients.component';
import {ManageClientEditComponent} from './client-edit/client-edit.component';
import {ManageClientCreateComponent} from './client-create/client-create.component';

const routes: Routes = [
  {path: 'clients', component: ManageClientsComponent},
  {path: 'clients-edit', component: ManageClientEditComponent},
  {path: 'clients-create', component: ManageClientCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule {
}
