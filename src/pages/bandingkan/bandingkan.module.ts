import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BandingkanPage } from './bandingkan';

@NgModule({
  declarations: [
    BandingkanPage,
  ],
  imports: [
    IonicPageModule.forChild(BandingkanPage),
  ],
  entryComponents: [
    BandingkanPage
  ]
})
export class BandingkanPageModule {}
