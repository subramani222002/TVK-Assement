import { Component } from '@angular/core';

interface Question {
  id: number;
  question: string;
  options: string[];
}

@Component({
  selector: 'app-back-end-assignment',
  templateUrl: './back-end-assignment.component.html',
  styleUrls: ['./back-end-assignment.component.css']
})
export class BackEndAssignmentComponent {
 
  heding = 'blue';
  questionColor = 'green';
}
