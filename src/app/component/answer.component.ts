import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-root',
  templateUrl: '../html/answer.html',
  styleUrls: ['../css/answer.component.css']
})


export class AnswerComponent implements OnInit {
  title: string = 'Résultat';
  percentage: number = 0;
  percentage_delay: number = 0;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ){}

  ngOnInit() {
    let rep: any = this.getLocalStorageRep();
    this.percentage = ( rep.ok / 10 ) * 100;
    let that = this;
    setTimeout(function() {
      that.percentage_delay = ( rep.ok / 10 ) * 100;
    }, 1000);
  }

  getLocalStorageRep()
{
   if(this.localStorageService.isSupported) 
    {
      console.log(this.localStorageService.get('rep'));
      return this.localStorageService.get('rep');
    }
  }
}

