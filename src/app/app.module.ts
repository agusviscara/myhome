import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DecimalPipe } from '@angular/common';
import { ExpandableComponent } from '../components/expandable/expandable';

// import { ComponentsModule } from '../components/components.module';
import { HeaderScroller } from '../components/header-scroller/header-scroller';

// https://github.com/pleerock/ngx-rating
// import { RatingModule } from "ngx-rating";

import { Geolocation } from '@ionic-native/geolocation';
import { MaterialIconsModule } from 'ionic2-material-icons';

//page
import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';

// import { OnboardingPage } from '../pages/onboarding/onboarding';
// import { LoginPage } from '../pages/login/login';
// import { SigninPage } from '../pages/signin/signin';
// import { RegisterPage } from '../pages/register/register';
// import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
// import { OtpPage } from '../pages/otp/otp';

// import { DashboardPage } from '../pages/dashboard/dashboard';
// import { BuyPage } from '../pages/buy/buy';
// import { CalculatorPage } from '../pages/calculator/calculator';
// import { ProfilePage } from '../pages/profile/profile';
// import { NearbyPage } from '../pages/nearby/nearby';
// import { BuyDetailPage } from '../pages/buy-detail/buy-detail';
// import { KirimPertanyaanPage } from '../pages/kirim-pertanyaan/kirim-pertanyaan';
// import { PembelianPage } from '../pages/pembelian/pembelian';
// import { PembayaranPage } from '../pages/pembayaran/pembayaran';
// import { BayarPage } from '../pages/bayar/bayar';
// import { PhotoViewer } from '@ionic-native/photo-viewer';
// import { SearchPage } from '../pages/search/search';
// import { SearchContentPage } from '../pages/search-content/search-content';
// import { SearchLocationPage } from '../pages/search-location/search-location';
// import { EditProfilePage } from '../pages/edit-profile/edit-profile';
// import { FavoritPage } from '../pages/favorit/favorit';
// import { TransactionPage } from '../pages/transaction/transaction';
// import { TransactionDetailPage } from '../pages/transaction-detail/transaction-detail';
// import { BandingkanPage } from '../pages/bandingkan/bandingkan';
// import { SearchViewPage } from '../pages/search-view/search-view';
// import { AlamatPage } from '../pages/alamat/alamat';
// import { TambahAlamatPage } from '../pages/tambah-alamat/tambah-alamat';
// import { TokoSayaPage } from '../pages/toko-saya/toko-saya';

@NgModule({
  declarations: [
    MyApp,
    HeaderScroller,
    // HomePage,
    ExpandableComponent,
    // OnboardingPage,
    // LoginPage,
    // SigninPage,
    // RegisterPage,
    // OtpPage,
    // ForgotPasswordPage,
    // DashboardPage,
    // BuyPage,
    // BuyDetailPage,
    // KirimPertanyaanPage,
    // CalculatorPage,
    // ProfilePage,
    // NearbyPage,
    // PembelianPage,
    // PembayaranPage,
    // BayarPage,
    // SearchPage,
    // SearchContentPage,
    // SearchLocationPage,
    // EditProfilePage,
    // FavoritPage,
    // TransactionPage,
    // TransactionDetailPage,
    // BandingkanPage,
    // SearchViewPage,
    // AlamatPage,
    // TambahAlamatPage,
    // TokoSayaPage
  ],
  imports: [
    BrowserModule,
    MaterialIconsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage,
    // OnboardingPage,
    // LoginPage,
    // SigninPage,
    // RegisterPage,
    // OtpPage,
    // ForgotPasswordPage,
    // DashboardPage,
    // BuyPage,
    // BuyDetailPage,
    // KirimPertanyaanPage,
    // CalculatorPage,
    // ProfilePage,
    // NearbyPage,
    // PembelianPage,
    // PembayaranPage,
    // BayarPage,
    // SearchPage,
    // SearchContentPage,
    // SearchLocationPage,
    // EditProfilePage,
    // FavoritPage,
    // TransactionPage,
    // TransactionDetailPage,
    // BandingkanPage,
    // SearchViewPage,
    // AlamatPage,
    // TambahAlamatPage,
    // TokoSayaPage
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
