import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, App } from 'ionic-angular';
// import { EditProfilePage } from '../edit-profile/edit-profile';
// import { FavoritPage } from '../favorit/favorit';
// import { TransactionPage } from '../transaction/transaction';
// import { OnboardingPage } from '../onboarding/onboarding';
// import { BandingkanPage } from '../bandingkan/bandingkan';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  item;
  items = [];
  password = [];
  user = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public appCtrl: App
  ) {

    this.items = [
      {
        'title': 'Telpon',
        'value': '082199998888',
        'icon': 'call'
      },
      {
        'title': 'Email',
        'value': 'johndoe@yahoo.com',
        'icon': 'mail'
      }
    ]

    this.password = [
      {
        'title': 'Password',
        'value': '1234567890',
        'icon': 'lock'
      }
    ]

    this.user = [
      {
        'title': 'Username',
        'value': 'John Doe',
        'icon': 'mode_edit'
      }
    ]


  }

  ionViewDidLoad() {

  }

  openEditPage(item) {
    let modal = this.modalCtrl.create('EditProfilePage', { item: item });
    modal.present();
  }

  favorit() {
    this.navCtrl.push('FavoritPage');
  }

  bandingkan() {
    this.navCtrl.push('BandingkanPage');
  }

  transaction() {
    this.navCtrl.push('TransactionPage');
  }

  logout() {
    // this navigation for outside tab component
    this.appCtrl.getRootNavs()[0].setRoot('OnboardingPage');
  }

}
