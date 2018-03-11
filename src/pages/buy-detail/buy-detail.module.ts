import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyDetailPage } from './buy-detail';
import { MaterialIconsModule } from 'ionic2-material-icons';
import { RatingModule } from "ngx-rating";

@NgModule({
  declarations: [
    BuyDetailPage,
  ],
  imports: [
    RatingModule,
    IonicPageModule.forChild(BuyDetailPage),
    MaterialIconsModule
  ],
  entryComponents: [
    BuyDetailPage
  ]
})
export class BuyDetailPageModule {}
