import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransactionDetailPage } from '../transaction-detail/transaction-detail';

/**
 * Generated class for the TransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
})
export class TransactionPage {

  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [
      {
        image: [
          { file: 'assets/imgs/furnitur-7.png' },
          { file: 'assets/imgs/furnitur-8.png' }
        ],
        title: 'Satu set meja makan jati jepara',
        lokasi: 'Depok',
        harga: 10000000,
        totalHarga: 10500325,
        date: '10/2/2018',
        kategori: 'furnitur',
        status: 'Pengiriman'
      },
      {
        image: [
          { file: 'assets/imgs/furnitur-9.png' },
          { file: 'assets/imgs/furnitur-10.png' }
        ],
        title: 'Lemari rak dapur minimalis termasuk jasa pemasangan',
        lokasi: 'Bogor',
        harga: 11500000,
        totalHarga: 12000546,
        date: '10/2/2018',
        kategori: 'furnitur',
        status: 'Menunggu Pembayaran'
      },
      {
        image: [
          { file: 'assets/imgs/furnitur-11.png' },
          { file: 'assets/imgs/furnitur-12.png' }
        ],
        title: 'Springbed ukuran 1 termasuk lemari dan lampu',
        lokasi: 'Bogor',
        harga: 6000000,
        totalHarga: 6500324,
        date: '10/2/2018',
        kategori: 'furnitur',
        status: 'Dibayar'
      }
    ]

  }

  ionViewDidLoad() {

  }

  transactionDetail(item) {
    this.navCtrl.push(TransactionDetailPage, {item : item} );
  }

}
