import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JacketPageRoutingModule } from './jacket-routing.module';

import { JacketPage } from './jacket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JacketPageRoutingModule
  ],
  declarations: [JacketPage]
})
export class JacketPageModule {}
