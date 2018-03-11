import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TambahAlamatPage } from './tambah-alamat';

@NgModule({
  declarations: [
    TambahAlamatPage,
  ],
  imports: [
    IonicPageModule.forChild(TambahAlamatPage),
  ],
})
export class TambahAlamatPageModule {}
