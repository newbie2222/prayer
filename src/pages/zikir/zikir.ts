import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceApiProvider } from '../../providers/service-api/service-api';

/**
 * Generated class for the ZikirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zikir',
  templateUrl: 'zikir.html',
})
export class ZikirPage {

  
  zikir = {email:'abu@gmail.com', zikir1: 0,zikir2: 0, zikir3: 0, zikir4: 0, zikir5: 0, date: new Date() };
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public serviceApi: ServiceApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZikirPage');
  }

  zikir1(){

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
            this.zikir.zikir1 = 33.333;
            this.serviceApi.addZikir(this.zikir).then((result) => {
              console.log(this.zikir);
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

  zikir2(){

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
            this.zikir.zikir2 = 33.333;
            this.serviceApi.addZikir(this.zikir).then((result) => {
              console.log(this.zikir);
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
  zikir3(){

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
            this.zikir.zikir3 = 33.333;
            this.serviceApi.addZikir(this.zikir).then((result) => {
              console.log(this.zikir);
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

  zikir4(){

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
            this.zikir.zikir4 = 33.333;
            this.serviceApi.addZikir(this.zikir).then((result) => {
              console.log(this.zikir);
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

  zikir5(){

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
            this.zikir.zikir5 = 33.333;
            this.serviceApi.addZikir(this.zikir).then((result) => {
              console.log(this.zikir);
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
