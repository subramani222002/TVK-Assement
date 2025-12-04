import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FullStackAssignmentComponent } from './full-stack-assignment/full-stack-assignment.component';
import { FrontEndAssignmentComponent } from './front-end-assignment/front-end-assignment.component';
import { BackEndAssignmentComponent } from './back-end-assignment/back-end-assignment.component';
import { JavaAssignmentComponent } from './java-assignment/java-assignment.component';
import { PythonAssignmentComponent } from './python-assignment/python-assignment.component';
import { TestingAssignmentComponent } from './testing-assignment/testing-assignment.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'contact', pathMatch: 'full' },
   {path:'',component:HomeComponent},
   {path:'fullstack',component:FullStackAssignmentComponent},
  {path:'frontend',component:FrontEndAssignmentComponent},
  {path:'backend',component:BackEndAssignmentComponent},
  {path:'java',component:JavaAssignmentComponent},
  {path:'python',component:PythonAssignmentComponent},
  {path:'testing',component:TestingAssignmentComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
