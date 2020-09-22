import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilAdminPageRoutingModule } from './accueil-admin-routing.module';

import { AccueilAdminPage } from './accueil-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AccueilAdminPageRoutingModule
  ],
  declarations: [AccueilAdminPage]
})
export class AccueilAdminPageModule {}
