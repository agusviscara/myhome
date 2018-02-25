import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 import { HomePage } from '../home/home'

@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public app: App) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpPage');
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Terima Kasih',
      message: "Registrasi akun anda berhasil, mulai pengalaman anda sekarang",
      buttons: [
        {
          text: 'Lanjut',
          handler: data => {
            this.openPage();
          }
        }
      ]
    });
    prompt.present();
  }

  openPage() {
    let nav = [];
    nav = this.app.getRootNavs();
    nav[0].setRoot(HomePage);
  }

}
