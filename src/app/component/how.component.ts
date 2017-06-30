import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { ViewChild } from "@angular/core/src/metadata/di";

@Component({
  selector: 'app-root',
  templateUrl: '../html/how.html',
  styleUrls: ['../css/how.component.css']
})

export class HowComponent implements OnInit {

  ngOnInit() {

  }
}