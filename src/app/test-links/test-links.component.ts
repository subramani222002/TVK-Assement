import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-links',
  templateUrl: './test-links.component.html',
  styleUrls: ['./test-links.component.css']
})
export class TestLinksComponent {
    tests = [
    { name: 'Full Stack Assignment', link: 'fullstack',img:'../../assets/assesspf/fullstack.png' },
    {name:'Back-End Assignment',link:'backend',img:'../../assets/assesspf/backend.png'},
    {name:'Front-End Assignment',link:'frontend',img:'../../assets/assesspf/frontend.png'},
    { name: 'Java Assignment', link: 'java',img:'../../assets/assesspf/java.png' },
    {name:'Testing Assignment',link:'testing',img:'../../assets/assesspf/tetsing.png'},
    { name: 'Python Assignment', link: 'python',img:'../../assets/assesspf/python.png' },
    
  ];

  constructor(private router: Router) {}

  openTest(route: string) {
    this.router.navigate([route]);
  }


}
