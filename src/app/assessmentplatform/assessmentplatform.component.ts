import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessmentplatform',
  templateUrl: './assessmentplatform.component.html',
  styleUrls: ['./assessmentplatform.component.css']
})
export class AssessmentplatformComponent {

isChecked: boolean = false;
warnmsg:string ='';

constructor(private router:Router){}

  toggleAgree(event: any) {
    this.isChecked = event.target.checked;
    if(this.isChecked){
      this.warnmsg='';
    }
  }
gotoTests(){
const checkbox: any = document.getElementById('agree');

  if(!checkbox.checked){
    this.warnmsg="⚠️ Please agree to the Terms & Conditions before continuing! 👆"
    return;
  }
  this.warnmsg = ""
  this.router.navigate(['/testlink'])
}
}
