import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionMenuPageRoutingModule } from './gestion-menu-routing.module';

import { GestionMenuPage } from './gestion-menu.page';
import {ReactiveFormsModule} from '@angular/forms'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GestionMenuPageRoutingModule
  ],
  declarations: [GestionMenuPage]
})
export class GestionMenuPageModule {}
