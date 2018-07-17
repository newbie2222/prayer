import { ServiceApiProvider } from './../../providers/service-api/service-api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';



@IonicPage()
@Component({
  selector: 'page-al-quran',
  templateUrl: 'al-quran.html',
})
export class AlQuranPage {

  date1:any;
  al1: number;
  al2:number;
  al3:number;
  data1 = { date1:Date, al1:0, al2:0, al3:0 };
  alquran = {email:'abu@gmail.com', alquran1: 0,alquran2: 0, alquran3: 0, alquran4: 0,alquran5: 0, alquran6: 0, date: new Date() };

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private sqlite: SQLite,
     private toast: Toast, private alertCtrl: AlertController, public serviceApi: ServiceApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlQuranPage',this.data1,this.data1.al1,this.data1.al2,this.data1.al3);
    
  }

  saveData() {
    
    // this.serviceApi.postUpdateUserProfile(this.data1).subscribe(data => {

    //   if (data.status == "error") {
    //     alert("Your code might be wrong, please try again.")
    //   } else {
       
    //     alert("Successfully Registered your account")
    //   }
    
    // })
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO expense VALUES(NULL,?,?,?,?)',[this.data1.date1,this.data1.al1,this.data1.al2,this.data1.al3])
        .then(res => {
          console.log(res);
          this.toast.show('Data saved', '5000', 'center').subscribe(
            toast => {
              this.navCtrl.popToRoot();
            }
          );
        })
        .catch(e => {
          console.log(e);
          this.toast.show(e, '5000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );
        });
    }).catch(e => {
      console.log(e);
      this.toast.show(e, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }

  alquran1(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you sure to submit?',
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
            this.alquran.alquran1 = 20;
            this.serviceApi.addAlquran(this.alquran).then((result) => {
              console.log(this.alquran);
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

  alquran2(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you sure to submit?',
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
            this.alquran.alquran2 = 20;
            this.serviceApi.addAlquran(this.alquran).then((result) => {
              console.log(this.alquran);
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

  alquran3(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you sure to submit?',
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
            this.alquran.alquran3 = 20;
            this.serviceApi.addAlquran(this.alquran).then((result) => {
              console.log(this.alquran);
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

  alquran4(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you sure to submit?',
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
            this.alquran.alquran4 = 20;
            this.serviceApi.addAlquran(this.alquran).then((result) => {
              console.log(this.alquran);
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

  alquran5(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you sure to submit?',
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
            this.alquran.alquran5 = 20;
            this.serviceApi.addAlquran(this.alquran).then((result) => {
              console.log(this.alquran);
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

  alquran6(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you sure to submit?',
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
            this.alquran.alquran6 = 20;
            this.serviceApi.addAlquran(this.alquran).then((result) => {
              console.log(this.alquran);
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
