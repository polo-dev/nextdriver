import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InscriptionComponent } from 'app/component/inscription.component';
import { Inscription2Component } from 'app/component/inscription_2.component';
import { ConnectionComponent } from 'app/component/connection.component';

const appRoutes: Routes = [
  { path: '',  component: ConnectionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'inscription/info', component: Inscription2Component }
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


