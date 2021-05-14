import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FAbuttonPageRoutingModule } from './f-abutton-routing.module';

import { FAbuttonPage } from './f-abutton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FAbuttonPageRoutingModule
  ],
  declarations: [FAbuttonPage]
})
export class FAbuttonPageModule {}
