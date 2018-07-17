import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceApiProvider } from '../../providers/service-api/service-api';

/**
 * Generated class for the NonMuslimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-non-muslim',
  templateUrl: 'non-muslim.html',
})
export class NonMuslimPage {

  non_muslim={ non_salam: 0,non_greetings: 0,non_membantu:0,non_senyum:0,non_berkongsi:0,non_jumpa:0,
    non_kemas:0,non_menepati:0,non_ilmu:0,non_membaca:0,non_refleksi:0,non_beriadah:0,
    non_usaha:0,non_bertakafur:0,non_berkelakuan:0,non_volunteerism:0,non_menghormati:0,
    non_jujur:0,non_janji:0,non_berkata:0,non_mengulang:0,non_buat:0  };
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public serviceApi: ServiceApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NonMuslimPage');
  }

  non_salam(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Bersalaman/Menghubungi parents?',
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
            this.non_muslim.non_salam = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_salam);
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
  non_greetings(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Greetings?',
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
            this.non_muslim.non_greetings = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_greetings);
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

  non_membantu(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Membantu?',
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
            this.non_muslim.non_membantu = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_membantu);
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
  non_senyum(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Salam,Senyum,Sapa?',
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
            this.non_muslim.non_senyum = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_senyum);
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
  non_berkongsi(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Berkongsi Kemahiran?',
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
            this.non_muslim.non_berkongsi = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_berkongsi);
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

  non_jumpa(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Jumpa lecturer/Guru?',
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
            this.non_muslim.non_jumpa = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_jumpa);
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
  non_kemas(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Berpakaian Kemas?',
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
            this.non_muslim.non_kemas = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_kemas);
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
  non_menepati(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Menepati Waktu?',
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
            this.non_muslim.non_menepati = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_menepati);
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
  non_ilmu(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Menghadiri majlis ilmu?',
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
            this.non_muslim.non_ilmu = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_ilmu);
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

  non_membaca(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Membaca?',
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
            this.non_muslim.non_membaca = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_membaca);
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
  non_refleksi(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Muhasabah/Refleksi?',
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
            this.non_muslim.non_refleksi = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_refleksi);
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
  non_beriadah(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Beribadah?',
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
            this.non_muslim.non_beriadah = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_beriadah);
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
  non_usaha(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Usaha melawan hawa nafsu?',
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
            this.non_muslim.non_usaha = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_usaha);
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
  non_bertakafur(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Bertafakur?',
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
            this.non_muslim.non_bertakafur = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_bertakafur);
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
  non_berkelakuan(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Berkelakuan baik?',
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
            this.non_muslim.non_berkelakuan = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_berkelakuan);
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
  non_volunteerism(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Volunteerism?',
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
            this.non_muslim.non_volunteerism = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_volunteerism);
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
  non_menghormati(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Menghormati orang lain?',
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
            this.non_muslim.non_menghormati = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_menghormati);
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
  non_jujur(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Jujur/Amanah?',
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
            this.non_muslim.non_jujur = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_jujur);
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
  non_janji(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Menepati janji?',
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
            this.non_muslim.non_janji = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_janji);
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
  non_berkata(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Berkata-kata baik?',
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
            this.non_muslim.non_berkata = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_berkata);
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
  non_mengulang(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Mengulang kaji?',
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
            this.non_muslim.non_mengulang = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_mengulang);
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
  non_buat(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you done Buat latihan?',
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
            this.non_muslim.non_buat = 4.55;
            this.serviceApi.addNonMuslim(this.non_muslim).then((result) => {
              console.log(this.non_buat);
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
