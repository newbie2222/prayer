import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { ServiceApiProvider } from '../../providers/service-api/service-api';


/**
 * Generated class for the IbuBapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ibu-bapa',
  templateUrl: 'ibu-bapa.html',
})
export class IbuBapaPage {

  data = { date:"", type:"", description:"", amount:0 };
  ibubapa = {email:'abu@gmail.com', menghubungi: 0,fatihah: 0, alikhlas: 0, date: new Date() };


  constructor(public navCtrl: NavController, public navParams: NavParams,private sqlite: SQLite,
    private toast: Toast,private alertCtrl: AlertController, public serviceApi: ServiceApiProvider) {
      this.ibubapa.date;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IbuBapaPage');
  }

  // saveData() {
  //   this.sqlite.create({
  //     name: 'ionicdb.db',
  //     location: 'default'
  //   }).then((db: SQLiteObject) => {
  //     db.executeSql('INSERT INTO expense VALUES(NULL,?,?,?,?)',[this.data.date,this.data.type,this.data.description,this.data.amount])
  //       .then(res => {
  //         console.log(res);
  //         this.toast.show('Data saved', '5000', 'center').subscribe(
  //           toast => {
  //             this.navCtrl.popToRoot();
  //           }
  //         );
  //       })
  //       .catch(e => {
  //         console.log(e);
  //         this.toast.show(e, '5000', 'center').subscribe(
  //           toast => {
  //             console.log(toast);
  //           }
  //         );
  //       });
  //   }).catch(e => {
  //     console.log(e);
  //     this.toast.show(e, '5000', 'center').subscribe(
  //       toast => {
  //         console.log(toast);
  //       }
  //     );
  //   });
  // }

  menghubungi(){

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
            this.ibubapa.menghubungi = 2.38;
            this.serviceApi.addIbubapa(this.ibubapa).then((result) => {
              console.log(this.ibubapa);
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

  fatihah(){

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
            this.ibubapa.fatihah = 2.38;
            this.serviceApi.addIbubapa(this.ibubapa).then((result) => {
              console.log(this.ibubapa);
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

  alikhlas(){

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
            this.ibubapa.menghubungi = 2.38;
            this.serviceApi.addIbubapa(this.ibubapa).then((result) => {
              console.log(this.ibubapa);
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


