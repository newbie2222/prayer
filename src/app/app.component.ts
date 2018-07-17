import { NonMuslimPage } from './../pages/non-muslim/non-muslim';
import { ReportPage } from './../pages/report/report';
import { QiamulaiPage } from './../pages/qiamulai/qiamulai';
import { ProfilePage } from './../pages/profile/profile';
import { LoginPage } from './../pages/login/login';
import { RakanPage } from './../pages/rakan/rakan';
import { IbuBapaPage } from './../pages/ibu-bapa/ibu-bapa';
import { AlQuranPage } from './../pages/al-quran/al-quran';
import { SolatSunatPage } from './../pages/solat-sunat/solat-sunat';
import { SolatfardhuPage } from './../pages/solatfardhu/solatfardhu';
import { WaktuSolatPage } from './../pages/waktu-solat/waktu-solat';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ZikirPage } from '../pages/zikir/zikir';
import { SolatRawatibPage } from '../pages/solat-rawatib/solat-rawatib';
import { PensyarahPage } from '../pages/pensyarah/pensyarah';
import { RegisterPage } from '../pages/register/register';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WaktuSolatPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Waktu Solat', component: WaktuSolatPage },
      { title: 'Register', component: RegisterPage },
      { title: 'Solat Fardhu', component: SolatfardhuPage },
      { title: 'Zikir', component: ZikirPage },
      { title: 'Solat Sunat', component: SolatSunatPage },
      { title: 'Solat Rawatib', component: SolatRawatibPage },
      { title: 'Qiammulai', component: QiamulaiPage },
      { title: 'Membaca Al-Quran', component: AlQuranPage },
      { title: 'Ibu Bapa', component: IbuBapaPage },
      { title: 'Pensyarah', component: PensyarahPage },
      { title: 'Rakan', component: RakanPage },
      { title: 'Non Muslim', component: NonMuslimPage },
      { title: 'Report', component: ReportPage },
      { title: 'Profile', component: ProfilePage }
      //{ title: 'Data', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
