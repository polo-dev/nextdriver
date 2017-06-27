import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InscriptionComponent } from 'app/component/inscription.component';
import { Inscription2Component } from 'app/component/inscription_2.component';
import { ConnectionComponent } from 'app/component/connection.component';
import { QuestionComponent } from 'app/component/question.component';

const appRoutes: Routes = [
  { path: '',  component: ConnectionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'inscription/info', component: Inscription2Component },
  { path: 'questions', component: QuestionComponent }
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


