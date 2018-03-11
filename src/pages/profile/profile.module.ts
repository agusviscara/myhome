import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { MaterialIconsModule } from 'ionic2-material-icons';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    MaterialIconsModule
  ],
})
export class ProfilePageModule {}
