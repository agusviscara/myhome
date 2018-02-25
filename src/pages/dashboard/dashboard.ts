import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  slider: Array<{ image: string }>;
  komersil: Array<any>;
  residen: Array<any>;
  furnitur: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.slider = [
      { image: 'assets/imgs/banner1.png' },
      { image: 'assets/imgs/banner4.png' },
      { image: 'assets/imgs/banner2.png' },
      { image: 'assets/imgs/banner3.png' }
    ];

    //for this feature content max 6
    this.komersil = [
      {
        image: 'assets/imgs/slide-home-1.png',
        title: 'Rumah baru tipe 45 di Depok Minimalis harga terjangkau',
        lokasi: 'depok',
        luasBangunan: 45
      },
      {
        image: 'assets/imgs/slide-home-2.png',
        title: 'Rumah baru tipe 45 di Bogor Minimalis harga terjangkau',
        lokasi: 'bogor',
        luasBangunan: 45
      },
      {
        image: 'assets/imgs/slide-home-3.png',
        title: 'Rumah baru tipe 45 di Tangerang Minimalis harga terjangkau',
        lokasi: 'tangerang',
        luasBangunan: 45
      },
      {
        image: 'assets/imgs/slide-home-4.png',
        title: 'Rumah baru tipe 45 di Bekasi Minimalis harga terjangkau',
        lokasi: 'bekasi',
        luasBangunan: 45
      },
      {
        image: 'assets/imgs/slide-home-5.png',
        title: 'Rumah baru tipe 45 di Cikarang Minimalis harga terjangkau',
        lokasi: 'cikarang',
        luasBangunan: 45
      },
      {
        image: 'assets/imgs/slide-home-6.png',
        title: 'Rumah baru tipe 45 di Karawang Minimalis harga terjangkau',
        lokasi: 'karawang',
        luasBangunan: 45
      }
    ]

    //for this feature content max 6
    this.residen = [
      {
        image: 'assets/imgs/slide-residen-1.png',
        title: 'Apartemen Tipe Studio di Depok Minimalis harga terjangkau',
        lokasi: 'depok',
        tipe: 'residen',
        harga: 500000000
      },
      {
        image: 'assets/imgs/slide-residen-2.png',
        title: 'Apartemen Tipe Studio di Bogor Minimalis harga terjangkau',
        lokasi: 'bogor',
        tipe: 'residen',
        harga: 500000000
      },
      {
        image: 'assets/imgs/slide-residen-3.png',
        title: 'Apartemen Tipe Studio di Tangerang Minimalis harga terjangkau',
        lokasi: 'tangerang',
        tipe: 'residen',
        harga: 500000000
      },
      {
        image: 'assets/imgs/slide-residen-4.png',
        title: 'Apartemen Tipe Studio di Bekasi Minimalis harga terjangkau',
        lokasi: 'bekasi',
        tipe: 'residen',
        harga: 500000000
      },
      {
        image: 'assets/imgs/slide-residen-5.png',
        title: 'Apartemen Tipe Studio di Jakarta Selatan Minimalis harga terjangkau',
        lokasi: 'jakarta selatan',
        tipe: 'residen',
        harga: 500000000
      },
      {
        image: 'assets/imgs/slide-residen-6.png',
        title: 'Apartemen Tipe Studio di jakarta timur Minimalis harga terjangkau',
        lokasi: 'jakarta timur',
        tipe: 'residen',
        harga: 500000000
      }
    ]

    //for this feature content max 6
    this.furnitur = [
      {
        image: 'assets/imgs/slide-furnitur-1.png',
        title: 'Sofa diskon 20% spesial hari ini',
        lokasi: 'depok'
      },
      {
        image: 'assets/imgs/slide-furnitur-2.png',
        title: 'Lemari minimalis diskon 40%',
        lokasi: 'bogor'
      },
      {
        image: 'assets/imgs/slide-furnitur-3.png',
        title: 'Set lemari kerja modern gratis ongkir',
        lokasi: 'tangerang'
      },
      {
        image: 'assets/imgs/slide-furnitur-4.png',
        title: 'Set perlengkapan dapur terlaris',
        lokasi: 'bekasi'
      },
      {
        image: 'assets/imgs/slide-furnitur-5.png',
        title: 'Kamar tidur termurah hanya hari ini',
        lokasi: 'cikarang'
      },
      {
        image: 'assets/imgs/slide-furnitur-6.png',
        title: 'Set meja makan diskon 10% hari ini',
        lokasi: 'karawang'
      }
    ]

}

ionViewDidLoad() {

}

}
