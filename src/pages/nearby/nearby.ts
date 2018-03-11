import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ActionSheetController } from 'ionic-angular';

declare var google;
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the NearbyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html',
})
export class NearbyPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  items: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public geolocation: Geolocation,
    private appCtrl : App,
    public actionSheetCtrl: ActionSheetController
  ) {

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
    this.loadMap();
  }

  loadMap() {

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker();

    }, (err) => {
      console.log(err);
    });

  }

  addMarker() {

    new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    // let content = "<h4>Information!</h4>";          
    // this.addInfoWindow(marker, content);

  }

  openNavDetailsPage(item) {
    // this navigation for outside tab component
    this.appCtrl.getRootNav().push('BuyDetailPage', { item: item });
  }

  filter() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Komersil',
          handler: () => {

          }
        }, {
          text: 'Furnitur',
          handler: () => {

          }
        },
        {
          text: 'Residen',
          handler: () => {

          }
        }
      ]
    });
    actionSheet.present();
  }

}
