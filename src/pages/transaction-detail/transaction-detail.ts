import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
// import { BuyDetailPage } from '../buy-detail/buy-detail';

/**
 * Generated class for the TransactionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-detail',
  templateUrl: 'transaction-detail.html',
})
export class TransactionDetailPage {

  item: any;
  viewHarga: any;
  viewHargaIcon: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private appCtrl : App) {

    this.item = navParams.data.item;
    this.viewHarga = 'hide';
    this.viewHargaIcon = 'ios-arrow-down';

  }

  ionViewDidLoad() {

  }

  detailHarga(viewHarga) {
    this.viewHarga = (viewHarga === 'hide') ? 'show' : 'hide';
    this.viewHargaIcon = (viewHarga === 'hide') ? 'ios-arrow-up' : 'ios-arrow-down';
  }

  openNavDetailsPage(item) {
    // this navigation for outside tab component
    this.appCtrl.getRootNav().push('BuyDetailPage', { item: item });
  }

}
