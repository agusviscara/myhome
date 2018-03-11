import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KirimPertanyaanPage } from './kirim-pertanyaan';

import { RatingModule } from "ngx-rating";

@NgModule({
  declarations: [
    KirimPertanyaanPage,
  ],
  imports: [
    IonicPageModule.forChild(KirimPertanyaanPage),
    RatingModule
  ],
})
export class KirimPertanyaanPageModule {}
