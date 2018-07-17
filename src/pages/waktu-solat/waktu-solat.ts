
import { ServiceApiProvider } from './../../providers/service-api/service-api';
import { Component } from '@angular/core';
import { NavController, Platform, AlertController, DateTime, IonicPage } from 'ionic-angular';
import { Subscription } from "rxjs/Rx";

declare let cordova: any;

interface PrayerDay {
  Asr: string
  Dhuhr:string  
  Fajr:string  
  Imsaak:string
  Isha:string  
  Maghrib:string
  Sunrise:string
  Sunset:string
}

@IonicPage()
@Component({
  selector: 'page-waktu-solat',
  templateUrl: 'waktu-solat.html',
})
export class WaktuSolatPage {

format;
total1:number;
total2:number;
total3:number;
total4:number;
total5:number;
totalAll:number;   
time1:any = "06:00:00";
time2:any = "13:30:00";
time3:any = "16:30:00";
time4:any = "19:30:00";
time5:any = "20:30:00";

  prayerTimesSubscription$: Subscription
  data = { title:'', description:'', date:'', time:'' };
  month: object
  today: PrayerDay
  currentDate: Date
  toda:number

  expenses: any = [];
  totalIncome = 0;
  totalExpense = 0;
  balance = 0;
  
  constructor(public navCtrl: NavController,
     private prayerTimesService: ServiceApiProvider,
     public platform: Platform,
     public alertCtrl: AlertController) {

    this.currentDate = new Date()
    console.log(this.currentDate.getDate())
    this.prayerTimesSubscription$ = this.prayerTimesService.prayerTimeList$.subscribe(month=> {
      this.month = month
      this.today = this.month[`${this.currentDate.getDate()}`]
      console.log(this.today.Fajr)   
      this.toda =new Date().getTime()
    })
    
  }

  ionViewDidLoad() {    
    this.fetchMonth()
  
  //   cordova.plugins.notification.local.schedule({
  //     title: 'Asar',
  //     text: this.currentDate,
  //     trigger: { at: new Date(2018, 5, 24, 18) },
  // });
  }
  

  fetchMonth() {
    this.prayerTimesService.fetchPrayerTimes()
  }
  // submit() {
  //   console.log(this.data);
  //   var date = new Date(this.data.date+" "+this.data.time);
  //   console.log(date);
  //   this.localNotifications.schedule({
  //      text: 'Delayed ILocalNotification',
  //     //  at: date,
  //      led: 'FF0000',
  //      sound: this.setSound(),
  //   });
  //   let alert = this.alertCtrl.create({
  //     title: 'Congratulation!',
  //     subTitle: 'Notification setup successfully at '+date,
  //     buttons: ['OK']
  //   });
  //   alert.present();
  //   this.data = { title:'', description:'', date:'', time:'' };
  // }
  // setSound() {
  //   if (this.platform.is('android')) {
  //     return 'file://assets/sounds/Rooster.mp3'
  //   } else {
  //     return 'file://assets/sounds/Rooster.caf'
  //   }
  // }
  haha(){
  this.currentDate.getTime();
  console.log(this.haha);
  }
  
  
  // ionViewWillEnter() {
  //   this.getData();
  // }
  
  // getData() {
  //   this.sqlite.create({
  //     name: 'ionicdb.db',
  //     location: 'default'
  //   }).then((db: SQLiteObject) => {
  //     db.executeSql('CREATE TABLE IF NOT EXISTS expense(rowid INTEGER PRIMARY KEY, date TEXT, type TEXT, description TEXT, amount INT)', {})
  //     .then(res => console.log('Executed SQL'))
  //     .catch(e => console.log(e));
  //     db.executeSql('SELECT * FROM expense ORDER BY rowid DESC', {})
  //     .then(res => {
  //       this.expenses = [];
  //       for(var i=0; i<res.rows.length; i++) {
  //         this.expenses.push({rowid:res.rows.item(i).rowid,date:res.rows.item(i).date,type:res.rows.item(i).type,description:res.rows.item(i).description,amount:res.rows.item(i).amount})
  //       }
  //     })
  //     .catch(e => console.log(e));
  //     db.executeSql('SELECT SUM(amount) AS totalIncome FROM expense WHERE type="Income"', {})
  //     .then(res => {
  //       if(res.rows.length>0) {
  //         this.totalIncome = parseInt(res.rows.item(0).totalIncome);
  //         this.balance = this.totalIncome-this.totalExpense;
  //       }
  //     })
  //     .catch(e => console.log(e));
  //     db.executeSql('SELECT SUM(amount) AS totalExpense FROM expense WHERE type="Expense"', {})
  //     .then(res => {
  //       if(res.rows.length>0) {
  //         this.totalExpense = parseInt(res.rows.item(0).totalExpense);
  //         this.balance = this.totalIncome-this.totalExpense;
  //       }
  //     })
  //   }).catch(e => console.log(e));
  // }
  
  // addData() {
  //   this.navCtrl.push(AddDataPage);
  // }
  
  // editData(rowid) {
  //   this.navCtrl.push(EditDataPage, {
  //     rowid:rowid
  //   });
  // }
  
  // deleteData(rowid) {
  //   this.sqlite.create({
  //     name: 'ionicdb.db',
  //     location: 'default'
  //   }).then((db: SQLiteObject) => {
  //     db.executeSql('DELETE FROM expense WHERE rowid=?', [rowid])
  //     .then(res => {
  //       console.log(res);
  //       this.getData();
  //     })
  //     .catch(e => console.log(e));
  //   }).catch(e => console.log(e));
  // }
}