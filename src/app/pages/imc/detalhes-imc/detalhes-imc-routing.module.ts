import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesImcPage } from './detalhes-imc.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesImcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesImcPageRoutingModule {}
