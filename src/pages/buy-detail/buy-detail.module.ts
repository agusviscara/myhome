import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyDetailPage } from './buy-detail';

import { RatingModule } from "ngx-rating";

@NgModule({
  declarations: [
    BuyDetailPage,
  ],
  imports: [
    RatingModule,
    IonicPageModule.forChild(BuyDetailPage),
  ],
  entryComponents: [
    BuyDetailPage
  ]
})
export class BuyDetailPageModule {}
