import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullStackAssignmentComponent } from './full-stack-assignment/full-stack-assignment.component';
import { FrontEndAssignmentComponent } from './front-end-assignment/front-end-assignment.component';
import { BackEndAssignmentComponent } from './back-end-assignment/back-end-assignment.component';
import { JavaAssignmentComponent } from './java-assignment/java-assignment.component';
import { PythonAssignmentComponent } from './python-assignment/python-assignment.component';
import { TestingAssignmentComponent } from './testing-assignment/testing-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    FullStackAssignmentComponent,
    FrontEndAssignmentComponent,
    BackEndAssignmentComponent,
    JavaAssignmentComponent,
    PythonAssignmentComponent,
    TestingAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
