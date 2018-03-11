import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  show = false;
  type = "password";

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) { }

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

  openPage() {
    let nav = [];
    nav = this.app.getRootNavs();
    nav[0].push('ForgotPasswordPage', { animate: true, direction: 'forward' });
  }

  // This app getRootNav() will be deprecated
  // openPage() {
  //   this.app.getRootNav().push(ForgotPasswordPage, { animate: true, direction: 'forward' });
  // }

}
