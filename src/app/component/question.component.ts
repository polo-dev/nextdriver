import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: '../html/question.html',
  styleUrls: ['../css/app.component.css']
})

export class QuestionComponent {

  constructor(
    private router: Router
  ){}
  
  title: string = 'Test de connaissance';
  turn: number = 0;
  answers = {
    ok : 0,
    notOk : 0
  };

  listQuestion = [
    {q: 'Qu\'elle est la distance de sécurité minimun ? ',
    answer : ['2 m', '1 m 50','1 m','50 cm'], rep : '1 m 50'},
    {q: 'Combien de roue à une voiture ? ',
    answer : ['1', '2','4','5'], rep : '5'},
    {q: 'Qu\'elle est la distance de sécurité minimun ? ',
    answer : ['2 m', '1 m 50','1 m','50 cm'], rep: '1 m 50'},
    {q: 'Qu\'elle est la distance de sécurité minimun ?',
    answer : ['2 m', '1 m 50','1 m','50 cm'], rep: '1 m 50'},
    {q: 'Qu\'elle est la distance de sécurité minimun ?  dernier test',
    answer : ['2 m', '1 m 50','1 m','50 cm'], rep: '1 m 50'},
  ]

  questions = this.listQuestion[0];

  submitQuestion(a ,i) {
    this.turn = this.turn + 1;
    if (this.turn <= 5) 
    {
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
    }
    else 
    {
      this.router.navigate(['/questions']);
    }
  }
}
