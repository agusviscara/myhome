import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DecimalPipe } from '@angular/common';
import { ExpandableComponent } from '../components/expandable/expandable';
import { HeaderScroller } from '../components/header-scroller/header-scroller';

// https://github.com/pleerock/ngx-rating
// import { RatingModule } from "ngx-rating";

import { Geolocation } from '@ionic-native/geolocation';

//page
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    HeaderScroller,
    ExpandableComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    DecimalPipe,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
