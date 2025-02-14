import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {environment} from '@env/environment';

import {AdminLayoutComponent} from '@theme/admin-layout/admin-layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {title: 'Dashboard', titleI18n: 'dashboard'},
      },
      {
        path: 'manage',
        loadChildren: () => import('./manage/manage.module').then(m => m.ManageModule),
        data: {title: 'Manage', titleI18n: 'manage'}
      },
      {
        path: 'sessions',
        loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsModule),
        data: {title: 'Sessions', titleI18n: 'Sessions'},
      },
    ],
  },
  {path: '**', redirectTo: 'dashboard'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
    }),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {
}
