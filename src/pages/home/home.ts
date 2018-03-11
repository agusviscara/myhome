import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//page
// import { DashboardPage } from '../dashboard/dashboard';
// import { BuyPage } from '../buy/buy';
// import { CalculatorPage } from '../calculator/calculator';
// import { ProfilePage } from '../profile/profile';
// import { NearbyPage } from '../nearby/nearby';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  // tabDashboard: any;
  // tabBuy: any;
  // tabNearby: any;
  // tabCalculator: any;
  // tabProfile: any;

  tab1Root = 'DashboardPage';
  tab2Root = 'BuyPage';
  tab3Root = 'NearbyPage';
  tab4Root = 'CalculatorPage';
  tab5Root = 'ProfilePage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.tabDashboard = DashboardPage;
    // this.tabBuy = BuyPage;
    // this.tabNearby = NearbyPage;
    // this.tabCalculator = CalculatorPage;
    // this.tabProfile = ProfilePage;
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad HomePage');
  }

}
