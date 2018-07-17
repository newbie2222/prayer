import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceApiProvider } from '../../providers/service-api/service-api';

/**
 * Generated class for the SolatSunatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solat-sunat',
  templateUrl: 'solat-sunat.html',
})
export class SolatSunatPage {

  sunat = {email:'abu@gmail.com', taubat: 0,hajat: 0, dhuha: 0, date: new Date() };
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController, public serviceApi: ServiceApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolatSunatPage');
  }

  taubat(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done zikir?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: () => {
            this.sunat.taubat = 30;
            this.serviceApi.addSunat(this.sunat).then((result) => {
              console.log(this.sunat);
              // if
            }, (err) => {
              console.log(err);
            });
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }

  hajat(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done zikir?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: () => {
            this.sunat.hajat = 15;
            this.serviceApi.addSunat(this.sunat).then((result) => {
              console.log(this.sunat);
              // if
            }, (err) => {
              console.log(err);
            });
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }

  dhuha(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done zikir?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: () => {
            this.sunat.dhuha = 20;
            this.serviceApi.addSunat(this.sunat).then((result) => {
              console.log(this.sunat);
              // if
            }, (err) => {
              console.log(err);
            });
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
}
