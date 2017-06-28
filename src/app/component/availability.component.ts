import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-root',
  templateUrl: '../html/availability.html',
  styleUrls: ['../css/availability.component.css']
})

export class AvailabilityComponent implements OnInit {
  title: string = 'Vos disponiblité';
  ngOnInit() {

  }
}