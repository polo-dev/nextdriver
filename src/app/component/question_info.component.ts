import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: '../html/question_info.html',
  styleUrls: ['../css/question.component.css']
})

export class QuestionInfoComponent {

  constructor ( private router: Router) {}
  title: string = 'Test code';

  goToTest() {
    this.router.navigate(['/questions']);
  }
  goToAvailability() {
    console.log('soon');
  }
}