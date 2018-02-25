import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { BuyDetailPage } from '../buy-detail/buy-detail';

/**
 * Generated class for the FavoritPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorit',
  templateUrl: 'favorit.html',
})
export class FavoritPage {

  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private appCtrl : App) {

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
      }
    ]

  }

  ionViewDidLoad() {
    
  }

  openNavDetailsPage(item) {
    // this navigation for outside tab component
    this.appCtrl.getRootNav().push(BuyDetailPage, { item: item });
  }

}
