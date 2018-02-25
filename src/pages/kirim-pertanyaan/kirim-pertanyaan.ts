import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DecimalPipe } from '@angular/common';
/**
 * Generated class for the KirimPertanyaanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kirim-pertanyaan',
  templateUrl: 'kirim-pertanyaan.html',
})
export class KirimPertanyaanPage {

  item: any;
  starMeter: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public decimalPipe: DecimalPipe
  ) {
    this.item = navParams.data.item;
    this.starMeter = 5;
  }

  ionViewDidLoad() {
    
  }

}
