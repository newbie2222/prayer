import { FormGroup, FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core'
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http'
import 'rxjs/add/operator/map'
import { Observable, Subject } from "rxjs/Rx"
import { Storage } from '@ionic/storage'

/*
  Generated class for the ServiceApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const PRAYER_URL = 'http://praytime.info/getprayertimes.php?lat=3.0612&lon=101.51889800000004&gmt=480&m=5&y=2018&school=4'
//const PRAYER_URL ='https://api.azanpro.com/times/today.json?zone=sgr01&format=24-hour'
const CORS = 'https://cors-anywhere.herokuapp.com/'


@Injectable()
export class ServiceApiProvider {

  apiUrl = 'http://175.24.1.134/attandance';

  private readonly _prayerTimeSubject$: Subject<any> = new Subject()
  prayerTimeList$: Observable<any> = this._prayerTimeSubject$.asObservable()
  
  constructor(private http: Http) {}

  fetchPrayerTimes(longitude?: string, latitude?: string, month?: number) {
      this.http.get(CORS+PRAYER_URL).take(1).subscribe(res=>this._prayerTimeSubject$.next(res.json()))
  }
 
  getReport() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/main/appsReport').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  register(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/main/appsRegister', JSON.stringify(data))
        .subscribe(res => {
          console.log('success sent',data.name)
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  
  postUser(form): Observable<any> {
    let url = this. apiUrl + '/main/appsLogin'
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, form, options)
      .map((res: Response) => res.json());
  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/main/appsUser').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/main/appsadd', JSON.stringify(data))
        .subscribe(res => {
          console.log('success sent',data.name)
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addZikir(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/main/appszikir', JSON.stringify(data))
        .subscribe(res => {
          console.log('success sent',data.email)
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addQiamulai(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/main/appsqiamulai', JSON.stringify(data))
        .subscribe(res => {
          console.log('success sent',data.email)
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  addAlquran(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/main/appsalquran', JSON.stringify(data))
        .subscribe(res => {
          console.log('success sent',data.email)
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addSunat(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/main/appssunat', JSON.stringify(data))
        .subscribe(res => {
          console.log('success sent',data.email)
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addIbubapa(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/main/appsibubapa', JSON.stringify(data))
        .subscribe(res => {
          console.log('success sent',data.email)
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addNonMuslim(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/main/appsnonmuslim', JSON.stringify(data))
        .subscribe(res => {
          console.log('success sent',data.email)
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}