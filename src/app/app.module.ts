import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssessmentPlatformComponent } from './assessment-platform/assessment-platform.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FullStackAssignmentComponent } from './full-stack-assignment/full-stack-assignment.component';
import { FrontEndAssignmentComponent } from './front-end-assignment/front-end-assignment.component';
import { BackEndAssignmentComponent } from './back-end-assignment/back-end-assignment.component';
import { JavaAssignmentComponent } from './java-assignment/java-assignment.component';
import { PythonAssignmentComponent } from './python-assignment/python-assignment.component';
import { TestingAssignmentComponent } from './testing-assignment/testing-assignment.component';
import { TestLinksComponent } from './test-links/test-links.component';
import { AssessmentplatformComponent } from './assessmentplatform/assessmentplatform.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    AssessmentplatformComponent,
=======
    AssessmentPlatformComponent,
>>>>>>> Stashed changes
    ContactComponent,
    HomeComponent,
    FullStackAssignmentComponent,
    FrontEndAssignmentComponent,
    BackEndAssignmentComponent,
    JavaAssignmentComponent,
    PythonAssignmentComponent,
    TestingAssignmentComponent,
    TestLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
