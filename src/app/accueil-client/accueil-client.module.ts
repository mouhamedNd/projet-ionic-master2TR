import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilClientPageRoutingModule } from './accueil-client-routing.module';

import { AccueilClientPage } from './accueil-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilClientPageRoutingModule
  ],
  declarations: [AccueilClientPage]
})
export class AccueilClientPageModule {}
