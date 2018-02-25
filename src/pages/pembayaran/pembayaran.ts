import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BayarPage } from '../bayar/bayar';

/**
 * Generated class for the PembayaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pembayaran',
  templateUrl: 'pembayaran.html',
})
export class PembayaranPage {

  item: any;
  starMeter: number;
  items: any = [];
  itemExpandHeight: number = 100;
  expanded: boolean = false;
  check: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.item = navParams.data.item;
    this.starMeter = 5;

    this.check = false;

  }

  ionViewDidLoad() {

  }

  // expand collapse
  // expandItem() {

  //   if (this.expanded == false) {
  //     this.expanded = !this.expanded;
  //     console.log(this.expanded);
  //   }
  //   else {
  //     this.expanded = false;
  //     console.log(this.expanded);
  //   }
  //   return this.expanded;

  // }

  bayar() {
    this.navCtrl.push(BayarPage);
  }

}
