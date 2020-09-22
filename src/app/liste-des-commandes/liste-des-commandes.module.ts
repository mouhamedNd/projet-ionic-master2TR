import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeDesCommandesPageRoutingModule } from './liste-des-commandes-routing.module';

import { ListeDesCommandesPage } from './liste-des-commandes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeDesCommandesPageRoutingModule
  ],
  declarations: [ListeDesCommandesPage]
})
export class ListeDesCommandesPageModule {}
