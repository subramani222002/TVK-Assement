import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FullStackAssignmentComponent } from './full-stack-assignment/full-stack-assignment.component';
import { FrontEndAssignmentComponent } from './front-end-assignment/front-end-assignment.component';
import { BackEndAssignmentComponent } from './back-end-assignment/back-end-assignment.component';
import { JavaAssignmentComponent } from './java-assignment/java-assignment.component';
import { PythonAssignmentComponent } from './python-assignment/python-assignment.component';
import { TestingAssignmentComponent } from './testing-assignment/testing-assignment.component';
import { TestLinksComponent } from './test-links/test-links.component';
import { AssessmentplatformComponent } from './assessmentplatform/assessmentplatform.component';

// ✅ Correct import (WITH S)
import { FeedbacksComponent } from './feedbacks/feedbacks.component';

@NgModule({
  declarations: [
    AppComponent,
    AssessmentplatformComponent,
    ContactComponent,
    HomeComponent,
    FullStackAssignmentComponent,
    FrontEndAssignmentComponent,
    BackEndAssignmentComponent,
    JavaAssignmentComponent,
    PythonAssignmentComponent,
    TestingAssignmentComponent,
    FeedbacksComponent   // ⬅ MUST MATCH .ts EXPORT
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule   // ⬅ REQUIRED for ngClass, *ngIf, *ngFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
