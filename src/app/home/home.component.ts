import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 constructor(private router: Router) {}

  start() {
    this.router.navigate(['ass']);  
  }

  title:string='Online Assessment for College Students';
  title1:string='Empowering Students with Skill-Based Evaluations';
  title2:string='150+';
  title3:string='Join Us';

  image = 'assets/img2.jpg';
   image1 = 'assets/img3.jpg'; 
   image2 = 'assets/img4.jpg'; 
   image3 = 'assets/img7.jpg';
}



