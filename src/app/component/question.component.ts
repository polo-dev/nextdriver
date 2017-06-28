import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-root',
  templateUrl: '../html/question.html',
  styleUrls: ['../css/question.component.css']
})

export class QuestionComponent {

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ){}
  
  title: string = 'Code de la route';
  turn: number = 0;
  selectedIdx = -1;
  selectedRep: string;
  answers = {
    ok : 0,
    notOk : 0
  };

  listQuestion = [
    {q: 'Qu\'elle est la distance de sécurité minimun ? ',
    answer : ['2 m', '1 m 50','1 m','50 cm'], rep : '1 m 50'},
    {q: 'Combien de roue à une voiture ? ',
    answer : ['1', '2','4','5'], rep : '5', wasClick: false},
    {q: 'Qu\'elle est la distance de sécurité minimun ? ',
    answer : ['2 m', '1 m 50','1 m','50 cm'], rep: '1 m 50', wasClick: false},
    {q: 'Qu\'elle est la distance de sécurité minimun ?',
    answer : ['2 m', '1 m 50','1 m','50 cm'], rep: '1 m 50', wasClick: false},
    {q: 'Qu\'elle est la distance de sécurité minimun ?  dernier test',
    answer : ['2 m', '1 m 50','1 m','50 cm'], rep: '1 m 50', wasClick: false},
  ]

  questions = this.listQuestion[0];

  selectItem(index, rep):void {
    this.selectedIdx = index;
    this.selectedRep = rep;
  }

  submitQuestion() {
    this.selectedIdx = -1; 
    let a = this.selectedRep;
    if(typeof a != 'undefined' && a && a.length >= 1)  
    {
      if (this.turn < 5) 
      {
        this.turn = this.turn + 1;
        if(this.questions.rep == a)
        {
          this.answers.ok++;
        }
        else 
        {
          this.answers.notOk++;
        }

        if(this.turn < 5)
        {
          this.questions = this.listQuestion[this.turn];
        }
        console.log(this.answers);
        this.selectedRep = null;
        if(this.turn == 5)
        {
          this.setLocalStorage("rep", this.answers);
          this.router.navigate(['/questions/resultat']);
        }
      }
      else 
      {
        this.setLocalStorage("rep", this.answers);
        this.router.navigate(['/questions/resultat']);
      }
    }
  }

  setLocalStorage(key, rep)
  {
    if(this.localStorageService.isSupported) 
    {
      this.localStorageService.set(key, rep);
    }
  }
}
