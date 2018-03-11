import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

declare var google;

import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the BuyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy-detail',
  templateUrl: 'buy-detail.html'
})
export class BuyDetailPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  item;
  slider: Array<{ image: string }>;
  itemsField: any = {};
  iconLike: string;
  starMeter: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public actionSheetCtrl: ActionSheetController
  ) {

    this.item = navParams.data.item;
    this.starMeter = 5;

    this.slider = this.item.image;

    this.itemsField = [
      {
        label: 'ID',
        value: 'HH5573733'
      },
      {
        label: 'Jumlah Lantai',
        value: '1'
      },
      {
        label: 'Kondisi',
        value: 'Baru'
      },
      {
        label: 'Luas Tanah',
        value: '72m'
      },
      {
        label: 'Luas Bangunan',
        value: '45m'
      },
      {
        label: 'Sertifikat',
        value: 'Hak Milik'
      },
      {
        label: 'Tipe',
        value: 'Rumah'
      },
      {
        label: 'Daya Listrik',
        value: '1300 Watt'
      },
      {
        label: 'Tanggal Iklan',
        value: '15 Desember 2017'
      }
    ];
  }

  ionViewDidLoad() {
    this.iconLike = "ios-heart-outline";
    this.loadMap();
    // console.log(this.slider);
  }

  like(iconLike) {
    this.iconLike = (iconLike === 'ios-heart-outline') ? 'ios-heart' : 'ios-heart-outline';
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

  // addInfoWindow(marker, content) {

  //   let infoWindow = new google.maps.InfoWindow({
  //     content: content
  //   });

  //   google.maps.event.addListener(marker, 'click', () => {
  //     infoWindow.open(this.map, marker);
  //   });

  // }

  sayaBerminat() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Telpon',
          icon: 'call',
          handler: () => {
            // console.log('Destructive clicked');
          }
        }, {
          text: 'Kirim Pertanyaan',
          icon: 'mail',
          handler: () => {
            this.kirimPertanyaan();
            // console.log('Archive clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close-circle',
          handler: () => {
            // console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  kirimPertanyaan() {
    this.navCtrl.push('KirimPertanyaanPage', { item: this.item });
  }

  calculator() {
    this.navCtrl.push('CalculatorPage');
  }

  bandingkan() {
    this.navCtrl.push('BandingkanPage');
  }

  beli() {
    this.navCtrl.push('PembelianPage', { item: this.item });
  }

}
