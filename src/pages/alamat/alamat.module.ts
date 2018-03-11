import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlamatPage } from './alamat';

@NgModule({
  declarations: [
    AlamatPage,
  ],
  imports: [
    IonicPageModule.forChild(AlamatPage),
  ],
  entryComponents: [
    AlamatPage
  ]
})
export class AlamatPageModule {}
