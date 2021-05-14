import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeImcPageRoutingModule } from './home-imc-routing.module';

import { HomeImcPage } from './home-imc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeImcPageRoutingModule
  ],
  declarations: [HomeImcPage]
})
export class HomeImcPageModule {}
