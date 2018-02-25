import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, App } from 'ionic-angular';
import { SearchLocationPage } from '../search-location/search-location';
import { DecimalPipe } from '@angular/common';
import { SearchViewPage } from '../search-view/search-view';

/**
 * Generated class for the SearchPropertyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-content',
  templateUrl: 'search-content.html',
})
export class SearchContentPage {
 
  dataTabs:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public decimalPipe: DecimalPipe,
    public app: App
  ) {

    this.dataTabs = this.navParams.data;

  }

  ionViewDidLoad() {
    // console.log(this.dataTabs);
  }

  searchLocation() {
    let modal = this.modalCtrl.create(SearchLocationPage);
    modal.present();
  }

  searchProperty() {
    let nav = [];
    nav = this.app.getRootNavs();
    nav[0].push(SearchViewPage, { animate: true, direction: 'forward', item: 'property' });
  }

  searchFurnitur() {
    let nav = [];
    nav = this.app.getRootNavs();
    nav[0].push(SearchViewPage, { animate: true, direction: 'forward', item: 'furnitur' });
  }

}
