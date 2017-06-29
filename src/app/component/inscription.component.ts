import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { ApiService } from 'app/service/api.service';

// export class Login {
//   email: string;
//   password: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: '../html/inscription_step1.html',
  styleUrls: ['../css/inscription.component.css']
})

export class InscriptionComponent {
  constructor(
    private router: Router,
    private api: ApiService
  ) {}

  title = 'Inscription';
  email:string = '';
  password: string = '';
  firstname: string = '';
  lastname: string = '';
  emailError: boolean = false;
  passwordError: boolean = false;
  firstnameError: boolean = false;
  lastnameError: boolean = false;

  submitInscription() {
    let that = this;
    if(!this.validationErrors())
    {
      console.log(this.firstname);
      let data = {
        password: this.password,
        firstName: this.firstname,
        lastName: this.lastname,
        email: this.email
      }
      this.api.createAccount(data)
        .then((rep) => {
          console.log(rep);
          console.log(JSON.parse(rep._body).responseCode);
          if(JSON.parse(rep._body).responseCode == 100) 
          {
            console.log('error');
          }
          else 
          {
            that.api.setUserId(JSON.parse(rep._body).content.userId);
            that.router.navigate(['/inscription/info']);
          }
        })
        .catch((e) => console.log(e));
    }
  }

  validationErrors() {
    this.lastnameError = (this.lastname.length < 2) ? true : false;
    this.firstnameError = (this.firstname.length < 2) ? true : false;
    this.passwordError = (this.password.length < 6) ? true : false;
    this.emailError = (this.email.length < 2) ? true : false;

    return (this.lastnameError || this.firstnameError || this.passwordError || this.emailError) ? true : false;
  }
}
