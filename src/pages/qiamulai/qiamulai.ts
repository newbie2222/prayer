import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceApiProvider } from '../../providers/service-api/service-api';

/**
 * Generated class for the QiamulaiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qiamulai',
  templateUrl: 'qiamulai.html',
})
export class QiamulaiPage {

  qiamulai = {email:'abu@gmail.com', tahajud : 0, witir: 0, date: new Date() };
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController, public serviceApi: ServiceApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QiamulaiPage');
  }

  tahajud(){

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
            this.qiamulai.tahajud = 50;
            this.serviceApi.addQiamulai(this.qiamulai).then((result) => {
              console.log(this.qiamulai);
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

  witir(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Witir?',
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
            this.qiamulai.witir = 50;
            this.serviceApi.addQiamulai(this.qiamulai).then((result) => {
              console.log(this.qiamulai);
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
