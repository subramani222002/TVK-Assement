import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-links',
  templateUrl: './test-links.component.html',
  styleUrls: ['./test-links.component.css']
})
export class TestLinksComponent {

  cards = [
  {icon: 'fa-brands fa-react', title: 'Frontend Developer', time: '60 mins' ,link:'frontend' },
  {icon: 'fa-brands fa-node-js', title: 'Backend Developer', time: '60 mins',link:'backend' },
  {icon: 'fa-brands fa-java', title: 'Java Developer', time: '60 mins' ,link:'java'},
  {icon: 'fa-brands fa-python', title: 'Python Developer', time: '60 mins',link:'python' },
  {icon: 'fas fa-database', title: 'SQL Developer', time: '60 mins',link:'sql'},
  {icon: 'fa-brands fa-angular', title: 'Angular Developer', time: '60 mins',link:'angular'},
  {icon: 'fa-brands fa-aws', title: 'AWS', time: '60 mins',link:'aws'},
  {icon: 'fa-brands fa-php', title: 'PHP Developer', time: '60 mins',link:'php'},
  {icon: 'fas fa-gem', title: 'Ruby Developer', time: '60 mins',link:'ruby'},
  {icon:  'fa-solid fa-c ', title: 'C-Language ', time: '60 mins',link:'clangauge'},
  {icon: 'fas fa-code', title: 'C++ Developer', time: '60 mins',link:'cpp'},
  {icon: 'fab fa-cuttlefish', title: 'C# Developer', time: '60 mins',link:'csharp'},
   
];

constructor(private router: Router) {}

  startT(card:any) {
    this.router.navigate(['/termsbox'],{queryParams:{testRoute:card.link}});
  }

}
