import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  title: string = 'Online Assessment for College Students';
  title1: string = 'Empowering Students with Skill-Based Evaluations';
  title2: string = '150+';
  title3: string = 'Join Us';

  image = 'assets/homeImg/img2.jpg';
  image1 = 'assets/homeImg/img3.jpg';
  image2 = 'assets/homeImg/img4.jpg';
  image3 = 'assets/homeImg/img7.jpg';

  private observer!: IntersectionObserver;

  constructor(private router: Router) {} 

  ngOnInit(): void {

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible'); 
          }
        });
      },
      { threshold: 0.2 } 
    );

   
    const elementsToAnimate = document.querySelectorAll(
      '.section-animate, .slide-left, .slide-right'
    );

    elementsToAnimate.forEach(el => this.observer.observe(el));
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  start() {
    this.router.navigate(['ass']);  
  }
}
