import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: '../html/credit.html',
  styleUrls: ['../css/credit.component.scss']
})

export class CreditComponent {
  constructor(
    private router: Router,
  ) {}

}
