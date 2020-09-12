import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {ManageRoutingModule} from './manage-routing.module';
import {ManageClientsComponent} from './clients/clients.component';
import {ManageClientEditComponent} from './client-edit/client-edit.component';
import {ManageClientCreateComponent} from './client-create/client-create.component';
import {ManageDirectorsComponent} from './directors/directors.component';
import {ManageDirectorEditComponent} from './director-edit/director-edit.component';
import {ManageDirectorCreateComponent} from './director-create/director-create.component';
import {ManageProducersComponent} from './producers/producers.component';
import {ManageProducerEditComponent} from './producer-edit/producer-edit.component';
import {ManageProducerCreateComponent} from './producer-create/producer-create.component';
import {ManageProtagonistsComponent} from './protagonists/protagonists.component';
import {ManageProtagonistEditComponent} from './protagonist-edit/protagonist-edit.component';
import {ManageProtagonistCreateComponent} from './protagonist-create/protagonist-create.component';
import {ManageTechnologiesComponent} from './technologies/technologies.component';
import {ManageTechnologyEditComponent} from './technology-edit/technology-edit.component';
import {ManageTechnologyCreateComponent} from './technology-create/technology-create.component';
import {ManageGamesComponent} from './games/games.component';
import {ManageGameEditComponent} from './game-edit/game-edit.component';
import {ManageGameCreateComponent} from './game-create/game-create.component';

const COMPONENTS = [ManageClientsComponent, ManageClientEditComponent, ManageClientCreateComponent, ManageDirectorsComponent, ManageDirectorEditComponent, ManageDirectorCreateComponent, ManageProducersComponent, ManageProducerEditComponent, ManageProducerCreateComponent, ManageProtagonistsComponent, ManageProtagonistEditComponent, ManageProtagonistCreateComponent, ManageTechnologiesComponent, ManageTechnologyEditComponent, ManageTechnologyCreateComponent, ManageGamesComponent, ManageGameEditComponent, ManageGameCreateComponent];
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
