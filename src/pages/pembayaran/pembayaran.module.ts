import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PembayaranPage } from './pembayaran';

import { RatingModule } from "ngx-rating";

@NgModule({
  declarations: [
    PembayaranPage,
  ],
  imports: [
    IonicPageModule.forChild(PembayaranPage),
    RatingModule
  ],
})
export class PembayaranPageModule {}
