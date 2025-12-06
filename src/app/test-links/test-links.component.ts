import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-links',
  templateUrl: './test-links.component.html',
  styleUrls: ['./test-links.component.css']
})
export class TestLinksComponent {
    tests = [
    { name: 'Full Stack Assignment', link: 'fullstack',img:'../../assets/assesspf/full.jpeg' },
    {name:'Back-End Assignment',link:'backend',img:'../../assets/assesspf/back.jpeg'},
    { name: 'Java Assignment', link: 'java',img:'../../assets/assesspf/ja.jpeg' },
    { name: 'Python Assignment', link: 'python',img:'../../assets/assesspf/pyt.jpeg' },
    {name:'Testing Assignment',link:'testing',img:'../../assets/assesspf/tes.jpeg'},
    {name:'Front-End Assignment',link:'frontend',img:'../../assets/assesspf/front.jpeg'},
   
    // { name: 'JavaScript Test', link: '/js-test',img:'../../assets/assesspf/javascript.jpeg' },
    // { name: 'Aptitude Test', link: '/apti-test',img:'../../assets/assesspf/frontend.jpeg'},
    // { name: 'SQL Test', link: '/sql-test',img:'../../assets/assesspf/sql.jpeg' }

  ];

  constructor(private router: Router) {}

  openTest(route: string) {
    this.router.navigate([route]);
  }


}
