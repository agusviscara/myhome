import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

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

  login: any;
  register: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.login = LoginPage;
    this.register = RegisterPage;
  }

  ionViewDidLoad() {
    
  }

}
