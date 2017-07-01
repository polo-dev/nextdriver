import { Component } from '@angular/core';

export class Login {
  email: string;
  password: string;
}

@Component({
  selector: 'app-root',
  template:`<router-outlet></router-outlet>`,
  styleUrls: ['css/app.component.css']
})

export class AppComponent {
  title = 'Connexion';
}
