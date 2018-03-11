import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  signIn : any;
  show = false;
  type = "password";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.signIn = 'login';
  }

  ionViewDidLoad() {
    
  }

  showPassword() {
    this.show = !this.show;
    if (this.show) {
      this.type = "text";
    }
    else {
      this.type = "password";
    }
  }

  forgotPassword() {
    this.navCtrl.push('ForgotPasswordPage');
  }

  otp() {
    this.navCtrl.push('OtpPage');
  }

}
