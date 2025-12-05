import { Component } from '@angular/core';
<<<<<<< Updated upstream
import { Router } from '@angular/router';
=======
>>>>>>> Stashed changes

@Component({
  selector: 'app-assessmentplatform',
  templateUrl: './assessmentplatform.component.html',
  styleUrls: ['./assessmentplatform.component.css']
})
export class AssessmentplatformComponent {

<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes
}
