import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchViewPage } from '../search-view/search-view';

/**
 * Generated class for the BandingkanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bandingkan',
  templateUrl: 'bandingkan.html',
})
export class BandingkanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  search() {
    this.navCtrl.push(SearchViewPage, { item: 'property' });
  }

}
