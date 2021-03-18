import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SweaterPage } from './sweater.page';

const routes: Routes = [
  {
    path: '',
    component: SweaterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SweaterPageRoutingModule {}
