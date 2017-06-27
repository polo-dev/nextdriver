import { Component } from '@angular/core';
import {Router} from '@angular/router';

// export class Login {
//   email: string;
//   password: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: '../html/inscription_step1.html',
  styleUrls: ['../css/app.component.css']
})

export class InscriptionComponent {
  constructor(
    private router: Router,
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
    if(!this.validationErrors())
    {
      console.log(this.firstname);
      this.router.navigate(['/inscription/info']);
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
