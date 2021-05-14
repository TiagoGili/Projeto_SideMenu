import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaixaPage } from './faixa.page';

const routes: Routes = [
  {
    path: '',
    component: FaixaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaixaPageRoutingModule {}
