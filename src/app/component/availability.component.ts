import { OnInit, Component, ElementRef, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { ViewChild } from "@angular/core/src/metadata/di";

@Component({
  selector: 'app-root',
  templateUrl: '../html/availability.html',
  styleUrls: ['../css/availability.component.css']
})

export class AvailabilityComponent implements OnInit {
  @ViewChild("availability") table:ElementRef;
  title: string = 'Vos disponiblité';
  availability:any = [];
  constructor(
    private rd: Renderer,
    private router: Router
  ){}

  ngOnInit() {

  }

  onClickTable() {
    
    let a = this.table.nativeElement.querySelectorAll('td.YES');
    this.availability = [];
    let that = this;
    a.forEach(function (td) {
      that.availability.push({ day: td.dataset.day, hour: td.dataset.hour });
    });
    console.log(this.availability);
  }

  onSubmit() {
    if(this.availability.length > 0) 
    {
      this.router.navigate(['how']);
    }
    else 
    {
      console.log('it\'s empty');
    }
  }
}