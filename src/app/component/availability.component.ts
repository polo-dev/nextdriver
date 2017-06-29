import { OnInit, Component, ElementRef, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { ViewChild } from "@angular/core/src/metadata/di";
import { ApiService } from 'app/service/api.service';

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
    private router: Router,
    private api: ApiService
  ){}

  ngOnInit() {

  }

  onClickTable() {
    
    let a = this.table.nativeElement.querySelectorAll('td.YES');
    let b = this.availability.length;
    this.availability = [];
    let that = this;
    a.forEach(function (td) {
      that.availability.push({ day: td.dataset.day, hour: td.dataset.hour });
    });
    if(a.length == 0 && b == 0)
    {
      location.reload();
    }
    console.log(this.availability);
  }

  onSubmit() {
    if(this.availability.length > 0) 
    {
      let that = this;
      let promise = new Promise((resolve, object) => {
        for(let a in that.availability)
        {
          let data = {
            day: that.availability[a].day + 1,
            start: "15:00",
            end: "17:00"
          };
          that.api.addAvailability(data);
        }
        window.setTimeout(
          function() {
            // On tient la promesse !
            resolve("bien joué");
          }, 1500);
      });
      promise.then(() => {
        console.log('test');
        that.router.navigate(['dashboard']);
      })
      .catch((e) => console.log(e));
      
      
    }
    else 
    {
      console.log('it\'s empty');
    }
  }
}