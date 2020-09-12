import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {ManageRoutingModule} from './manage-routing.module';
import {ManageClientsComponent} from './clients/clients.component';
import {ManageClientEditComponent} from './client-edit/client-edit.component';
import {ManageClientCreateComponent} from './client-create/client-create.component';

const COMPONENTS = [ManageClientsComponent, ManageClientEditComponent, ManageClientCreateComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [
    SharedModule,
    ManageRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class ManageModule {
}
