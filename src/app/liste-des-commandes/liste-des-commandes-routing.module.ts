import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeDesCommandesPage } from './liste-des-commandes.page';

const routes: Routes = [
  {
    path: '',
    component: ListeDesCommandesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeDesCommandesPageRoutingModule {}
