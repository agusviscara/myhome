import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

// import { SearchContentPage } from '../search-content/search-content';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  search: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.search = 'property';
  }

  ionViewDidLoad() {

  }

  searchLocation() {
    let modal = this.modalCtrl.create('SearchLocationPage');
    modal.present();
  }

  searchContent(search) {
    if (search === 'property') {
      this.navCtrl.push('SearchViewPage', { animate: true, direction: 'forward', item: 'property' });
    }
    else {
      this.navCtrl.push('SearchViewPage', { animate: true, direction: 'forward', item: 'furnitur' });
    }
  }

}
