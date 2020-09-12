import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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

const routes: Routes = [
  {path: 'clients', component: ManageClientsComponent},
  {path: 'clients-edit', component: ManageClientEditComponent},
  {path: 'clients-create', component: ManageClientCreateComponent},
  {path: 'directors', component: ManageDirectorsComponent},
  {path: 'director-edit', component: ManageDirectorEditComponent},
  {path: 'director-create', component: ManageDirectorCreateComponent},
  {path: 'producers', component: ManageProducersComponent},
  {path: 'producer-edit', component: ManageProducerEditComponent},
  {path: 'producer-create', component: ManageProducerCreateComponent},
  {path: 'protagonists', component: ManageProtagonistsComponent},
  {path: 'protagonist-edit', component: ManageProtagonistEditComponent},
  {path: 'protagonist-create', component: ManageProtagonistCreateComponent},
  {path: 'technologies', component: ManageTechnologiesComponent},
  {path: 'technology-edit', component: ManageTechnologyEditComponent},
  {path: 'technology-create', component: ManageTechnologyCreateComponent},
  {path: 'games', component: ManageGamesComponent},
  {path: 'game-edit', component: ManageGameEditComponent},
  {path: 'game-create', component: ManageGameCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule {
}
