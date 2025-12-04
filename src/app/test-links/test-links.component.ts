import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-links',
  templateUrl: './test-links.component.html',
  styleUrls: ['./test-links.component.css']
})
export class TestLinksComponent {
    tests = [
    { name: 'Full Stack Assignment', link: '/fullstack-test' },
    { name: 'Python Assignment', link: '/python-test' },
    {name:'Front-End Assignment',link:'/frontend-test'},
    {name:'Testing Assignment',link:'/testing-test'},
    { name: 'Java Assignment', link: '/java-test' },
    {name:'Back-End Assignment',link:'/backend-test'},
    { name: 'JavaScript Test', link: '/js-test' },
    { name: 'Aptitude Test', link: '/apti-test' },
    { name: 'SQL Test', link: '/sql-test' }

  ];

  constructor(private router: Router) {}

  openTest(route: string) {
    this.router.navigate([route]);
  }


}
