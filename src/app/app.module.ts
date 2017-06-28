import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {OnsenModule} from 'ngx-onsenui';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AgmCoreModule } from "@agm/core";

import { AppRoutingModule }        from './app-routing.module';
import { InscriptionComponent } from './component/inscription.component'; 
import { Inscription2Component } from './component/inscription_2.component'; 
import { ConnectionComponent } from './component/connection.component';
import { QuestionComponent } from 'app/component/question.component';
import { TestComponent } from 'app/component/test';
import { QuestionInfoComponent } from 'app/component/question_info.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    InscriptionComponent,
    Inscription2Component,
    QuestionComponent,
    TestComponent,
    QuestionInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    OnsenModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAu2VNTjUAkY8LunWGSqqtKzYXmeOYbf1A",
      libraries: ["places"]
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }