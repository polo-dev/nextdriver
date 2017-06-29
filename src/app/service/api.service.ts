import { Headers, RequestOptions, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class ApiService {
  constructor (
    private http: Http,
    private localStorageService: LocalStorageService
  ) {}

  private url = 'http://alive.romain-valin.fr/web/';

  connection(data): Promise<any>{
    let urlPost = 'user/login';

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append("password", data.password);
    urlSearchParams.append("email", data.email);
    let param = urlSearchParams.toString();

    return this.postData(param, urlPost);
  }

  createAccount(data): Promise<any>{
    let urlPost = 'user/register/1';
    
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append("form[plain_password]", data.password);
    urlSearchParams.append("form[firstName]", data.firstName);
    urlSearchParams.append("form[lastName]", data.lastName);
    urlSearchParams.append("form[email]", data.email);
    let param = urlSearchParams.toString();

    return this.postData(param, urlPost);
  }

  createAccount2(data): Promise<any>{
    let urlPost = 'user/register/2';

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append("userId", this.getUserId());
    urlSearchParams.append("form[birthDate]", data.birthDate);
    urlSearchParams.append("form[civility]", data.civility);
    urlSearchParams.append("form[phoneNumber]", data.phoneNumber);
    urlSearchParams.append("form[address]", data.address);
    let param = urlSearchParams.toString();

    return this.postData(param, urlPost);
  }

  getQuestions(): Promise<any>{
    let urlPost = 'exam/questions';

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append("userId", this.getUserId());
    let param = urlSearchParams.toString();
    
    return this.postData(param, urlPost);
  }

  //send data to API
  private postData(param, urlPost): Promise<any>
  {
    let urlApi = this.url + urlPost;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(urlApi, param, options)
      .toPromise()
      .then()
      .catch();
  }

  // local storage
  getUserId(): any {
    if(this.localStorageService.isSupported) 
    {
      console.log(this.localStorageService.get('user'));
      return this.localStorageService.get('user');
    }
    return false;
  }

  setUserId(id): any {
    if(this.localStorageService.isSupported)
    {
      this.localStorageService.set('user', id)
      return true;
    }
    return false;
  }

}
