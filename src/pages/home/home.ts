import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { EditDataPage } from '../edit-data/edit-data';
import { AddDataPage } from '../add-data/add-data';
import { AlQuranPage } from '../al-quran/al-quran';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  expenses: any = [];
    totalIncome = 0;
    totalExpense = 0;
    balance = 0;

  constructor(public navCtrl: NavController,
     private sqlite: SQLite) {
  }

  ionViewDidLoad() {
    this.getData();
  }
  
  ionViewWillEnter() {
    this.getData();
  }
  
  // getData() {
  //   this.sqlite.create({
  //     name: 'ionicdb.db',
  //     location: 'default'
  //   }).then((db: SQLiteObject) => {
  //     db.executeSql('CREATE TABLE IF NOT EXISTS profile (rowid INTEGER PRIMARY KEY, date TEXT,type TEXT, description TEXT, amount INT, al1 INT,al2 INT, al3 INT, ibu1 INT,ibu2 INT, ibu3 INT, pen1 INT, pen2 INT, rak1 INT, rak2 INT, ra INT,su1 INT,su2 INT, su3 INT, su4 INT, su5 INT,far1 INT, far2 INT,zi1 INT,zi2 INT,zi3 INT, zi4 INT, zi5 INT)', {})
  //     .then(res => console.log('Executed SQL'))
  //     .catch(e => console.log(e));
  //     db.executeSql('SELECT * FROM profile ORDER BY rowid DESC', {})
  //     .then(res => {
  //       this.profiles = [];
  //       for(var i=0; i<res.rows.length; i++) {
  //         this.profiles.push({rowid:res.rows.item(i).rowid,date:res.rows.item(i).date,type:res.rows.item(i).type,description:res.rows.item(i).description,amount:res.rows.item(i).amount,
  //           // al1:res.rows.item(i).al1,al2:res.rows.item(i).al2,al3:res.rows.item(i).al3,
  //           // ibu1:res.rows.item(i).ibu1,ibu2:res.rows.item(i).ibu2,ibu3:res.rows.item(i).ibu3,
  //           // pen1:res.rows.item(i).pen1,pen2:res.rows.item(i).pen2,rak1:res.rows.item(i).rak1,
  //           // rak2:res.rows.item(i).rak2,ra:res.rows.item(i).ra,su1:res.rows.item(i).su1,
  //           // su2:res.rows.item(i).su2,su3:res.rows.item(i).su3,su4:res.rows.item(i).su4,su5:res.rows.item(i).su5,
  //           // far1:res.rows.item(i).far1,far2:res.rows.item(i).far2,zi1:res.rows.item(i).zi1,zi2:res.rows.item(i).zi2,
  //           // zi3:res.rows.item(i).zi3,zi4:res.rows.item(i).zi4,zi5:res.rows.item(i).zi5
  //         })
  //       }
  //     })
  //     .catch(e => console.log(e));
  //     db.executeSql('SELECT SUM(amount) AS totalIncome FROM profile WHERE type="Income"', {})
  //     .then(res => {
  //       if(res.rows.length>0) {
  //         this.totalIncome = parseInt(res.rows.item(0).totalIncome);
  //         this.balance = this.totalIncome-this.totalExpense;
  //       }
  //     })
  //     .catch(e => console.log(e));
  //     db.executeSql('SELECT SUM(amount) AS totalExpense FROM profile WHERE type="Expense"', {})
  //     .then(res => {
  //       if(res.rows.length>0) {
  //         this.totalExpense = parseInt(res.rows.item(0).totalExpense);
  //         this.balance = this.totalIncome-this.totalExpense;
  //       }
  //     })
  //   }).catch(e => console.log(e));
  // }
  getData() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS expense(rowid INTEGER PRIMARY KEY, date TEXT, type TEXT, description TEXT, amount INT, date1 TEXT, al1 INT, al2 INT, al3 INT, ibu1 INT,ibu2 INT, ibu3 INT, pen1 INT, pen2 INT, rak1 INT, rak2 INT, ra INT,su1 INT,su2 INT, su3 INT, su4 INT, su5 INT,far1 INT, far2 INT,zi1 INT,zi2 INT,zi3 INT, zi4 INT, zi5 INT)', {})
      .then(res => console.log('Executed SQL'))
      .catch(e => console.log(e));
      db.executeSql('SELECT * FROM expense ORDER BY rowid DESC', {})
      .then(res => {
        this.expenses = [];
        for(var i=0; i<res.rows.length; i++) {
          this.expenses.push({rowid:res.rows.item(i).rowid,date:res.rows.item(i).date,type:res.rows.item(i).type,description:res.rows.item(i).description,amount:res.rows.item(i).amount,date1:res.rows.item(i).date1,
            al1:res.rows.item(i).al1,al2:res.rows.item(i).al2,al3:res.rows.item(i).al3,
            ibu1:res.rows.item(i).ibu1,ibu2:res.rows.item(i).ibu2,ibu3:res.rows.item(i).ibu3,
            pen1:res.rows.item(i).pen1,pen2:res.rows.item(i).pen2,rak1:res.rows.item(i).rak1,
            rak2:res.rows.item(i).rak2,ra:res.rows.item(i).ra,su1:res.rows.item(i).su1,
            su2:res.rows.item(i).su2,su3:res.rows.item(i).su3,su4:res.rows.item(i).su4,su5:res.rows.item(i).su5,
            far1:res.rows.item(i).far1,far2:res.rows.item(i).far2,zi1:res.rows.item(i).zi1,zi2:res.rows.item(i).zi2,
            zi3:res.rows.item(i).zi3,zi4:res.rows.item(i).zi4,zi5:res.rows.item(i).zi5})
        }
      })
      .catch(e => console.log(e));
      db.executeSql('SELECT SUM(amount) AS totalIncome FROM expense WHERE type="Income"', {})
      .then(res => {
        if(res.rows.length>0) {
          this.totalIncome = parseInt(res.rows.item(0).totalIncome);
          this.balance = this.totalIncome-this.totalExpense;
        }
      })
      .catch(e => console.log(e));
      db.executeSql('SELECT SUM(amount) AS totalExpense FROM expense WHERE type="Expense"', {})
      .then(res => {
        if(res.rows.length>0) {
          this.totalExpense = parseInt(res.rows.item(0).totalExpense);
          this.balance = this.totalIncome-this.totalExpense;
        }
      })
    }).catch(e => console.log(e));
  }
  
  addData() {
    this.navCtrl.push(AddDataPage);
  }
  
  editData(rowid) {
    this.navCtrl.push(EditDataPage, {
      rowid:rowid
    });
  }
  
  deleteData(rowid) {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('DELETE FROM expense WHERE rowid=?', [rowid])
      .then(res => {
        console.log(res);
        this.getData();
      })
      .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }
  
 
}
