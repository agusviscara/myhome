import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SearchContentPage } from '../search-content/search-content';

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

  searchContent: any;
  propertyData: any;
  furniturData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.searchContent = SearchContentPage;
    this.propertyData = 'property';
    this.furniturData = 'furnitur';

  }

  ionViewDidLoad() {
    
  }

}
