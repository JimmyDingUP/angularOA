/**
 * App Routing
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: './feature/welcome/welcome.module#WelcomeModule'
  },
  {
    path: 'home',
    loadChildren: './feature/home/home.module#HomeModule'
  },
  {
    path: 'old-home',
    loadChildren: './feature/old-home/old-home.module#OldHomeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
