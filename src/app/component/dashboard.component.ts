import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: '../html/dashboard.html',
  styleUrls: ['../css/dashboard.component.scss']
})

export class DashboardComponent {
  constructor(
    private router: Router,
  ) {}

  progression = {
    total: 50,
    code: 80,
    driving: 20
  };

  nextCourse = {
    date: 'Mardi 25 sept 2017',
    hour: '15h45',
    place: 'Maison'
  };
  examDate = '30 mars 2018';
}
