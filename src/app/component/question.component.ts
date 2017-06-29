import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { ApiService } from 'app/service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: '../html/question.html',
  styleUrls: ['../css/question.component.css']
})

export class QuestionComponent implements OnInit {

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private api: ApiService
  ){}
  dataLoad = false;
  title: string = 'Code de la route';
  turn: number = 0;
  selectedIdx = -1;
  selectedRep: string;
  answers = {
    ok : 0,
    notOk : 0
  };
  realList = [];
  listAnswers = [];
  listQuestion = [];

  questions = null;

  ngOnInit() {
    this.api.getQuestions()
      .then((response) => {
          let body = JSON.parse(response._body);
          console.log(body);
          if(body.responseCode !== 200) 
          {
            console.log('error');
          }
          else 
          {
            this.listQuestion = [];
            this.realList = [];
            this.realList = body.content;
            console.log(this.realList);
            for (var r in body.content)
            {
              this.listQuestion.push(body.content[r]);
              this.questions = this.listQuestion[0];
            }
            for (var l in this.questions.answers)
            { 
              this.listAnswers.push(this.questions.answers[l]);
            }
            console.log(this.listQuestion);
            console.log(this.questions);
            console.log(this.listAnswers);
            this.dataLoad = true;
          }
        })
        .catch((e) => console.log(e));
  }

  selectItem(index, rep):void {
    this.selectedIdx = index;
    this.selectedRep = rep;
  }

  submitQuestion() {
    this.selectedIdx = -1; 
    let a = this.selectedRep;
    if(typeof a != 'undefined' && a && a.length >= 1)  
    {
      if (this.turn < 10) 
      {
        this.turn = this.turn + 1;
        console.log(this.questions.answers[this.questions.correct_answer]);
        if(this.questions.answers[this.questions.correct_answer] == a)
        {
          this.answers.ok++;
        }
        else 
        {
          this.answers.notOk++;
        }

        if(this.turn < 10)
        {
          this.questions = this.listQuestion[this.turn];
          this.listAnswers = [];
          for (var l in this.questions.answers)
          { 
            this.listAnswers.push(this.questions.answers[l]);
          }
        }
        console.log(this.answers);
        this.selectedRep = null;
        if(this.turn == 10)
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

  getChar(i) {
    return String.fromCharCode(65 + i);
  }

  setLocalStorage(key, rep)
  {
    if(this.localStorageService.isSupported) 
    {
      this.localStorageService.set(key, rep);
    }
  }
}
