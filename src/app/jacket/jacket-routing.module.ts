import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JacketPage } from './jacket.page';

const routes: Routes = [
  {
    path: '',
    component: JacketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JacketPageRoutingModule {}
