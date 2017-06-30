import { Component } from '@angular/core';
import { ApiService } from 'app/service/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: '../html/connection.html',
  styleUrls: ['../css/connection.component.css']
})

export class ConnectionComponent {
  title: string = 'Connexion';
  email: string = '';
  password: string = '';
  error: string = null;
  emailError: boolean = false;
  passwordError: boolean = false;

  constructor(
    private router: Router,
    private api: ApiService
  ) {}


  submitLogin() {
      console.log(this.email);
      if(!this.validationErrors())
      {
        this.emailError = (this.email.length < 2) ? true : false; 
        this.passwordError = (this.password.length < 2) ? true : false; 

        let data = {
          password: this.password,
          email: this.email
        }
        let that = this;
        this.api.connection(data)
        .then((rep) => {
          console.log(rep);
          console.log(JSON.parse(rep._body).responseCode);
          if(JSON.parse(rep._body).responseCode == 100) 
          {
            console.log('error');
            that.error = 'Vérifier vos identifiants';
          }
          else 
          {
            that.error = null;
            that.api.setUserId(JSON.parse(rep._body).content.userId);
            that.router.navigate(['/questions/info']);
          }
        })
        .catch((e) => console.log(e));

      }
      else
      {
        this.error = null;
      }
  }

   validationErrors() {
    this.passwordError = (this.password.length < 6) ? true : false;
    this.emailError = (this.email.length < 2) ? true : false;

    return (this.passwordError || this.emailError) ? true : false;
  }
}
