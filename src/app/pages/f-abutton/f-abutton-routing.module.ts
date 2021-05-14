import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FAbuttonPage } from './f-abutton.page';

const routes: Routes = [
  {
    path: '',
    component: FAbuttonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FAbuttonPageRoutingModule {}
