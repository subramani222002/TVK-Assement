import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = 'Online Assessment for College Students';
  title1: string = 'Empowering Students with Skill-Based Evaluations';
  title2: string = '150+';
  title3: string = 'Join Us';

  image = 'assets/homeImg/img2.jpg';
  image1 = 'assets/homeImg/img3.jpg';
  image2 = 'assets/homeImg/img4.jpg';
  image3 = 'assets/homeImg/img7.jpg';

  constructor(private router: Router) {} 

  ngOnInit(): void {
    
    const reveals: NodeListOf<HTMLElement> = document.querySelectorAll('.section-animate');

    window.addEventListener('scroll', () => {
      reveals.forEach((el: HTMLElement) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
          el.classList.add('visible');
        }
      });
    });
  }

  start() {
    this.router.navigate(['ass']);  
  }
}
