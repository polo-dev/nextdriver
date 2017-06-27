import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule }        from './app-routing.module';
import { InscriptionComponent } from './component/inscription.component'; 
import { Inscription2Component } from './component/inscription_2.component'; 
import { ConnectionComponent } from './component/connection.component';
import { QuestionComponent } from 'app/component/question.component';
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    InscriptionComponent,
    Inscription2Component,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAu2VNTjUAkY8LunWGSqqtKzYXmeOYbf1A",
      libraries: ["places"]
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
