import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyPage } from './buy';

// https://github.com/pleerock/ngx-rating
import { RatingModule } from "ngx-rating";

@NgModule({
  declarations: [
    BuyPage,
  ],
  imports: [
    RatingModule,
    IonicPageModule.forChild(BuyPage),
  ],
  providers: [],
  entryComponents: [
    BuyPage
  ]
})
export class BuyPageModule { }