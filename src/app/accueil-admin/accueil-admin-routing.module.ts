import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilAdminPage } from './accueil-admin.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilAdminPageRoutingModule {}
