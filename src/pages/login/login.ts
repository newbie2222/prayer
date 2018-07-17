import { ServiceApiProvider } from './../../providers/service-api/service-api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events,ToastController,AlertController,MenuController,LoadingController,Loading } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import { HomePage } from '../home/home';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = { email:'', password:''};
  forms: string = "loginForm";
  loader: Loading;
  email: any;
  register: FormGroup;
  login: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     protected serviceApi: ServiceApiProvider,
     public loadingCtrl: LoadingController,public menuCtrl: MenuController, 
     private alertCtrl: AlertController, private toastCtrl: ToastController,
    private storage: LocalStorageService, 
    public events: Events, private formBuilder: FormBuilder) {

      this.loader = this.loadingCtrl.create({content: 'Please wait...'})
    this.login = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      accType: [1]
    });


    this.register = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])], //^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$
      password: ['', Validators.compose([Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$')])],
      confirmPassword: ['', Validators.required]
    }, { validator: LoginPage.MatchPassword });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value; // to get value in input tag
    let confirmPassword = AC.get('confirmPassword').value;
    if (password != confirmPassword) {

      AC.get('confirmPassword').setErrors({ MatchPassword: true })
    } else {

      return null

      // return Observable
      // .of('myValue' === AC.value)
      // .map(result => !!result ? null : { invalid: true });
    }

    // to get value in input tag

  }

  private presentAlert(text) {
    let alert = this.alertCtrl.create({
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  // forgotPassword() {
  //   this.navCtrl.push(ForgetpasswordPage);
  // }

  // increment(){
  //   this.counter += 1;
  //   console.log("login",this.counter)
  // }

async  goLogin(form) {
      this.loader.present()
      console.log("email", form.email);
      this.serviceApi.postUser(form).subscribe(
        data => {
          if(form.email != data.email){
            this.loader.dismiss()
            let toast = this.toastCtrl.create({
              message: 'Your email or password might be wrong!',
              duration: 5000,
              position: 'top'
            });
          
            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });
          
            toast.present();  
          }
          else{
            this.loader.dismiss()
            let toast = this.toastCtrl.create({
              message: 'You have been successfully logged in!',
              duration: 3000,
              position: 'top'
            });
            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });
          
            toast.present();
  
            console.log(data)
            this.storage.store('user', data);
            this.events.publish('Login')
            this.navCtrl.setRoot(HomePage);
          }     
        },
        err => {
          this.loader.dismiss()
          this.presentAlert('Please try again.');
          console.log(err);
        });
  
  }

  // goRegister(form) {   
  //     this.loader.present()
  //     this.checkEmail(form.value)
  //   // this.navCtrl.push(GettingstartedPage, form);
  // }

  // checkEmail(form) {//check email wether exist or not
  //   this.email = {
  //     email: form.email
  //   }
  
  //   this.serviceAPI.GetCheckEmail(form).subscribe(
  //     data => {
  //       if (data == 'exist') {
  //         this.loader.dismiss()
  //         this.presentAlert('The email is already in used. Please try another email.');
  //       }
  //       else {
  //         this.loader.dismiss()
  //         console.log("emailsss", data)
  //         this.navCtrl.push(GettingstartedPage, form);
  //       }
  //     });
  // }

  saveUser() {
    this.serviceApi.register(this.user).then((result) => {
      console.log(result);
      this.navCtrl.push(LoginPage);
    }, (err) => {
      console.log(err);
    });
  }
}
