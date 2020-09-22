import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilClientPageRoutingModule } from './profil-client-routing.module';

import { ProfilClientPage } from './profil-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProfilClientPageRoutingModule
  ],
  declarations: [ProfilClientPage]
})
export class ProfilClientPageModule {}
