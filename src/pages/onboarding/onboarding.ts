import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
/**
 * Generated class for the OnboardingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { SigninPage } from '../signin/signin';

@IonicPage()
@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
})

export class OnboardingPage {

  @ViewChild(Slides) slides: Slides;

  slider = [
    {
      title: "Hi Millenial, Mau rumah dengan cicilan ringan ?",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      image: "assets/imgs/home.png",
    },
    {
      title: "Atau mau cari furnitur untuk isi rumah anda ?",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      image: "assets/imgs/furniture.png",
    },
    {
      title: "Disini kami berikan pengalaman yang menarik",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      image: "assets/imgs/experience.png",
    }
  ];
  
  ;

  pushPage: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.pushPage = SigninPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardingPage');
  }
  goToSlide() {
    this.slides.slideTo(3, 500);
  }
}
