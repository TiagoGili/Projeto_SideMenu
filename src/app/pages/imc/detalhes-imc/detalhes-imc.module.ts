import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesImcPageRoutingModule } from './detalhes-imc-routing.module';

import { DetalhesImcPage } from './detalhes-imc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesImcPageRoutingModule
  ],
  declarations: [DetalhesImcPage]
})
export class DetalhesImcPageModule {}
