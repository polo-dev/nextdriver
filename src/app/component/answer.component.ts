import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-root',
  templateUrl: '../html/answer.html',
  styleUrls: ['../css/question.component.css']
})


export class AnswerComponent {
  title: string = 'Résultat';
  rep = this.getLocalStorageRep();

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ){}

  getLocalStorageRep()
{
   if(this.localStorageService.isSupported) 
    {
      console.log(this.localStorageService.get('rep'));
      return this.localStorageService.get('rep');
    }
  }
}

