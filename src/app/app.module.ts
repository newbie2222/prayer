import { NonMuslimPage } from './../pages/non-muslim/non-muslim';
import { ReportPage } from './../pages/report/report';
import { QiamulaiPage } from './../pages/qiamulai/qiamulai';
import { ProfilePage } from './../pages/profile/profile';
import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { EditDataPage } from './../pages/edit-data/edit-data';
import { AddDataPage } from './../pages/add-data/add-data';
import { WaktuSolatPage } from './../pages/waktu-solat/waktu-solat';
import { SolatfardhuPage } from './../pages/solatfardhu/solatfardhu';
import { RakanPage } from './../pages/rakan/rakan';
import { PensyarahPage } from './../pages/pensyarah/pensyarah';
import { IbuBapaPage } from './../pages/ibu-bapa/ibu-bapa';
import { AlQuranPage } from './../pages/al-quran/al-quran';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SolatRawatibPage } from '../pages/solat-rawatib/solat-rawatib';
import { ZikirPage } from '../pages/zikir/zikir';
import { ServiceApiProvider } from '../providers/service-api/service-api';
import { HttpModule } from '@angular/http';
import { SolatSunatPage } from '../pages/solat-sunat/solat-sunat';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { SQLite} from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { IonicStorageModule  } from '@ionic/storage'
import { ReactiveFormsModule, FormsModule } from "@angular/forms"
import { LocalStorageService } from '../../node_modules/ngx-webstorage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AlQuranPage,
    IbuBapaPage,
    PensyarahPage,
    RakanPage,
    SolatSunatPage,
    SolatfardhuPage,
    SolatRawatibPage,
    WaktuSolatPage,
    ZikirPage,
    AddDataPage,
    EditDataPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    QiamulaiPage,
    ReportPage,
    NonMuslimPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AlQuranPage,
    IbuBapaPage,
    PensyarahPage,
    RakanPage,
    SolatSunatPage,
    SolatfardhuPage,
    SolatRawatibPage,
    WaktuSolatPage,
    ZikirPage,
    AddDataPage,
    EditDataPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    QiamulaiPage,
    ReportPage,
    NonMuslimPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    SQLite,
    LocalStorageService,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceApiProvider
  ]
})
export class AppModule {}
