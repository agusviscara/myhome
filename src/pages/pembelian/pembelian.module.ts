import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PembelianPage } from './pembelian';

import { RatingModule } from "ngx-rating";

@NgModule({
  declarations: [
    PembelianPage,
  ],
  imports: [
    IonicPageModule.forChild(PembelianPage),
    RatingModule
  ],
})
export class PembelianPageModule {}
