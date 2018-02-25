import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BayarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bayar',
  templateUrl: 'bayar.html',
})
export class BayarPage {

  noRekening: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.noRekening = [
      {
        bank: 'BCA',
        cabang: 'Jakarta Barat',
        norek: 325442624,
        logo: './assets/imgs/BCA_logo.svg.png',
      },
      {
        bank: 'Mandiri',
        cabang: 'Jakarta Selatan',
        norek: 555554545,
        logo: './assets/imgs/Logo-Bank-Mandiri.png',
      },
      {
        bank: 'BNI',
        cabang: 'Jakarta Barat',
        norek: 1111113434,
        logo: './assets/imgs/BNI-logo.jpg',
      },
      {
        bank: 'CIMB Niaga',
        cabang: 'Jakarta Utara',
        norek: 444445454,
        logo: './assets/imgs/Logo-Bank-CIMB-Niaga.jpg',
      }
    ]

  }

  ionViewDidLoad() {

  }

}
