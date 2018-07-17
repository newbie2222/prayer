import { LoginPage } from './../login/login';
import { HomePage } from './../home/home';
import { ServiceApiProvider } from './../../providers/service-api/service-api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { dateDataSortValue } from 'ionic-angular/umd/util/datetime-util';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
 
  mains:any=[];
  // user = { name: '', email: '', phone: '', password:'',last_login: new Date()};
  constructor(public navCtrl: NavController, public navParams: NavParams, public serviceApi: ServiceApiProvider) {
    this.getUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  // saveUser() {
  //   this.serviceApi.register(this.user).then((result) => {
  //     console.log(result);
  //     this.navCtrl.push(LoginPage);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

  // displayUser(){
  //   this.serviceApi.getUser().then((re) =>{

  //     console.log(re);
  //     this.navCtrl.push(LoginPage);
  //   }, (err) => {
  //     console.log(err);
  //   });
    
  // }
  getUsers() {
    this.serviceApi.getUsers()
    .then(data => {
      this.mains = data;
      console.log('data ni ',this.mains);
    });
  }
   

}
