import { Component } from '@angular/core';
import { Router } from '@angular/router'
// export class Login {
//   email: string;
//   password: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: '../html/inscription_step2.html',
  styleUrls: ['../css/app.component.css']
})

export class Inscription2Component {
  constructor(
    private router: Router,
  ) {}

  title = 'Inscription - étape 2';
  birthday:string = '';
  age: number = null;
  sexe: any = {1: 'Femme', 2: 'Homme'};
  lastname: string = '';
  emailError: boolean = false;
  passwordError: boolean = false;
  firstnameError: boolean = false;
  lastnameError: boolean = false;
}
