import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BayarPage } from './bayar';

@NgModule({
  declarations: [
    BayarPage,
  ],
  imports: [
    IonicPageModule.forChild(BayarPage),
  ],
  entryComponents: [
    BayarPage
  ]
})
export class BayarPageModule {}
