import { Component } from '@angular/core';
import { ApiService } from 'app/service/api.service';

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

  submitLogin() {
      console.log(this.email);
      if(this.email.length < 1 || this.password.length < 1)
      {
        this.error = 'Mince alors';
        this.emailError = (this.email.length < 2) ? true : false; 
        this.passwordError = (this.password.length < 2) ? true : false; 
      }
      else
      {
        this.error = null;
      }
  }
}
