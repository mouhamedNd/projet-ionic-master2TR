import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilClientPage } from './profil-client.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilClientPageRoutingModule {}
