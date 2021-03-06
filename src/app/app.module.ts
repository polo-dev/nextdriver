import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AgmCoreModule } from "@agm/core";
import { LocalStorageModule } from 'angular-2-local-storage';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppRoutingModule }        from './app-routing.module';
import { InscriptionComponent } from './component/inscription.component';
import { Inscription2Component } from './component/inscription_2.component';
import { ConnectionComponent } from './component/connection.component';
import { QuestionComponent } from 'app/component/question.component';
import { TestComponent } from 'app/component/test';
import { QuestionInfoComponent } from 'app/component/question_info.component';
import { AnswerComponent } from 'app/component/answer.component';
import { AvailabilityComponent } from 'app/component/availability.component';
import { HowComponent } from 'app/component/how.component';
import { DashboardComponent } from 'app/component/dashboard.component';
import { CreditComponent } from 'app/component/credit.component';
import { ReservationComponent } from 'app/component/reservation.component';

import { ApiService } from 'app/service/api.service';


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    InscriptionComponent,
    Inscription2Component,
    QuestionComponent,
    TestComponent,
    QuestionInfoComponent,
    AnswerComponent,
    AvailabilityComponent,
    HowComponent,
    DashboardComponent,
    CreditComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAu2VNTjUAkY8LunWGSqqtKzYXmeOYbf1A",
      libraries: ["places"]
    }),
    LocalStorageModule.withConfig({
        prefix: 'next-driver',
        storageType: 'localStorage'
    })
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
