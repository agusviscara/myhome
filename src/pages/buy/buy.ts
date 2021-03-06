import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DecimalPipe } from '@angular/common';

/**
 * Generated class for the BuyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html',
})
export class BuyPage {

  kategori: string;
  items: Array<any>;
  furnitur: any = {};
  subsidi: any = {};
  starMeter: number;
  iconLike: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public decimalPipe: DecimalPipe
  ) {

    this.kategori = "Komersil";
    this.starMeter = 5;


    this.items = [
      {
        image: [
          { file: 'assets/imgs/komersil-1.jpg' }
        ],
        title: 'Rumah baru minimalis bebas banjir',
        lokasi: 'Depok',
        harga: 750000000,
        date: '10/2/2018',
        kategori: 'properti'
      },
      {
        image: [
          { file: 'assets/imgs/komersil-2.jpg' }
        ],
        title: 'sangat ekonomis siap huni dekat mall strategis rawamangun pulo asem',
        lokasi: 'Bogor',
        harga: 450000000,
        date: '10/2/2018',
        kategori: 'properti'
      },
      {
        image: [
          { file: 'assets/imgs/komersil-3.jpg' }
        ],
        title: 'Rumah bebas biaya KPR',
        lokasi: 'Bogor',
        harga: 555000000,
        date: '10/2/2018',
        kategori: 'properti'
      },
      {
        image: [
          { file: 'assets/imgs/komersil-4.jpg' }
        ],
        title: 'Dijual rumah tipe 45 dekat jalan raya',
        lokasi: 'Tangerang',
        harga: 950000000,
        date: '10/2/2018',
        kategori: 'properti'
      },
      {
        image: [
          { file: 'assets/imgs/komersil-5.jpg' }
        ],
        title: 'Rumah besar halaman luas',
        lokasi: 'Tangerang Selatan',
        harga: 400000000,
        date: '10/2/2018',
        kategori: 'properti'
      },
      {
        image: [
          { file: 'assets/imgs/komersil-6.jpg' }
        ],
        title: 'Rumah Di Taman Buaran, Cakung, Jakarta Timur',
        lokasi: 'Bekasi',
        harga: 500000000,
        date: '10/2/2018',
        kategori: 'properti'
      },
      {
        image: [
          { file: 'assets/imgs/komersil-7.jpg' }
        ],
        title: 'Prima Mandiri perumahan ada mushola nya',
        lokasi: 'Bekasi Barat',
        harga: 855000000,
        date: '10/2/2018',
        kategori: 'properti'
      },
      {
        image: [
          { file: 'assets/imgs/komersil-8.jpg' }
        ],
        title: 'Rumah Wisma Permai Barat',
        lokasi: 'Depok',
        harga: 750000000,
        date: '10/2/2018',
        kategori: 'properti'
      },
    ]

    this.furnitur = [
      {
        image: [
          { file: 'assets/imgs/furnitur-1.png' },
          { file: 'assets/imgs/furnitur-2.png' }
        ],
        title: 'Lorem Ipsum is simply dummy text of the printing',
        lokasi: 'Depok',
        harga: 750000000,
        date: '10/2/2018',
        kategori: 'furnitur'
      },
      {
        image: [
          { file: 'assets/imgs/furnitur-3.png' },
          { file: 'assets/imgs/furnitur-4.png' }
        ],
        title: 'Lorem Ipsum is simply dummy text of the printing',
        lokasi: 'Bogor',
        harga: 450000000,
        date: '10/2/2018',
        kategori: 'furnitur'
      },
      {
        image: [
          { file: 'assets/imgs/furnitur-5.png' },
          { file: 'assets/imgs/furnitur-6.png' }
        ],
        title: 'Lorem Ipsum is simply dummy text of the printing',
        lokasi: 'Bogor',
        harga: 555000000,
        date: '10/2/2018',
        kategori: 'furnitur'
      },
      {
        image: [
          { file: 'assets/imgs/furnitur-7.png' },
          { file: 'assets/imgs/furnitur-8.png' }
        ],
        title: 'Lorem Ipsum is simply dummy text of the printing',
        lokasi: 'Tangerang',
        harga: 950000000,
        date: '8/2/2018',
        kategori: 'furnitur'
      },
      {
        image: [
          { file: 'assets/imgs/furnitur-9.png' },
          { file: 'assets/imgs/furnitur-10.png' }
        ],
        title: 'Lorem Ipsum is simply dummy text of the printing',
        lokasi: 'Tangerang Selatan',
        harga: 400000000,
        date: '7/2/2018',
        kategori: 'furnitur'
      },
      {
        image: [
          { file: 'assets/imgs/furnitur-11.png' },
          { file: 'assets/imgs/furnitur-12.png' }
        ],
        title: 'Lorem Ipsum is simply dummy text of the printing',
        lokasi: 'Bekasi',
        harga: 500000000,
        date: '8/2/2018',
        kategori: 'furnitur'
      }
    ]

    this.subsidi = [
      {
        image: 'assets/imgs/komersil-7.jpg',
        title: 'Lorem Ipsum is simply dummy text of the printing',
        lokasi: 'Depok',
        harga: 750000000
      },
      {
        image: 'assets/imgs/komersil-8.jpg',
        title: 'Lorem Ipsum is simply dummy text of the printing',
        lokasi: 'Bogor',
        harga: 450000000
      },
      {
        image: 'assets/imgs/komersil-6.jpg',
        title: 'Lorem Ipsum is simply dummy text of the printing',
        lokasi: 'Bogor',
        harga: 555000000
      },
      {
        image: 'assets/imgs/komersil-5.jpg',
        title: 'Lorem Ipsum is simply dummy text of the printing',
        lokasi: 'Tangerang',
        harga: 950000000
      },
      {
        image: 'assets/imgs/komersil-4.jpg',
        title: 'Lorem Ipsum is simply dummy text of the printing',
        lokasi: 'Tangerang Selatan',
        harga: 400000000
      },
      {
        image: 'assets/imgs/komersil-3.jpg',
        title: 'Lorem Ipsum is simply dummy text of the printing',
        lokasi: 'Bekasi',
        harga: 500000000
      },
      {
        image: 'assets/imgs/komersil-2.jpg',
        title: 'Lorem Ipsum is simply dummy text of the printing',
        lokasi: 'Bekasi Barat',
        harga: 855000000
      },
      {
        image: 'assets/imgs/komersil-1.jpg',
        title: 'Lorem Ipsum is simply dummy text of the printing',
        lokasi: 'Depok',
        harga: 750000000
      },
    ]
  }

  ionViewDidLoad() {
    this.iconLike = "ios-heart-outline";
  }

  like(iconLike) {
    this.iconLike = (iconLike === 'ios-heart-outline') ? 'ios-heart' : 'ios-heart-outline';
  }

  openNavDetailsPage(item) {
    this.navCtrl.push('BuyDetailPage', { item: item });
  }

  search() {
    this.navCtrl.push('SearchPage');
  }

}
