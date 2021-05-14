import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaixaPageRoutingModule } from './faixa-routing.module';

import { FaixaPage } from './faixa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaixaPageRoutingModule
  ],
  declarations: [FaixaPage]
})
export class FaixaPageModule {}
