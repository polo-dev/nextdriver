import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InscriptionComponent } from 'app/component/inscription.component';
import { Inscription2Component } from 'app/component/inscription_2.component';
import { ConnectionComponent } from 'app/component/connection.component';
import { QuestionComponent } from 'app/component/question.component';
import { TestComponent } from 'app/component/test';
import { QuestionInfoComponent } from 'app/component/question_info.component';
import { AnswerComponent } from 'app/component/answer.component';
import { AvailabilityComponent } from 'app/component/availability.component';
import { HowComponent } from 'app/component/how.component';
import { DashboardComponent } from 'app/component/dashboard.component';
import { CreditComponent } from 'app/component/credit.component';


const appRoutes: Routes = [
  { path: '',  component: ConnectionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'inscription/info', component: Inscription2Component },
  { path: 'questions', component: QuestionComponent },
  { path: 'questions/info', component: QuestionInfoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'test', component: TestComponent },
  { path: 'questions/resultat', component: AnswerComponent},
  { path: 'inscription/availability', component: AvailabilityComponent },
  { path: 'how', component: HowComponent},
  { path: 'credit', component: CreditComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }


