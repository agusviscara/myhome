import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PembelianPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pembelian',
  templateUrl: 'pembelian.html',
})
export class PembelianPage {
  item: any;
  starMeter: number;
  totalBarang: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.item;
    this.starMeter = 5;
    this.totalBarang = 1;
  }

  ionViewDidLoad() {
    
  }

  pembayaran() {
    this.navCtrl.push('PembayaranPage', { item: this.item });
  }

  alamat() {
    this.navCtrl.push('AlamatPage');
  }

  plus() {
    this.totalBarang = this.totalBarang + 1;
  }

  minus() {
    if (this.totalBarang != 1){
      this.totalBarang = this.totalBarang - 1;
    }
  }

}
