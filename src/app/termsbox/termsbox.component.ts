import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-termsbox',
  templateUrl: './termsbox.component.html',
  styleUrls: ['./termsbox.component.css']
})
export class TermsboxComponent {
  testRoute:string ='';
  constructor(private router: Router, private route :ActivatedRoute ,) {}
ngOnInit(){
  this.route.queryParams.subscribe(params=>{
    this.testRoute=params['testRoute'];
  })
}

  openTest(){
    this.router.navigate([this.testRoute]);
  }
}
