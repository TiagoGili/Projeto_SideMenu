import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeImcPage } from './home-imc.page';

const routes: Routes = [
  {
    path: '',
    component: HomeImcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeImcPageRoutingModule {}
