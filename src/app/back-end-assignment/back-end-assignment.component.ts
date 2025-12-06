import { Component, OnInit } from '@angular/core';
import { QUESTION_BANK } from './question';

@Component({
  selector: 'app-back-end-assignment',
  templateUrl: './back-end-assignment.component.html',
  styleUrls: ['./back-end-assignment.component.css']
})
export class BackEndAssignmentComponent implements OnInit{
 
   username = 'chandana';
   
    timerHours: number = 1;
    timerMinutes: number = 0;
 
    interval: any;
 
   questions: any[] = [];
 
   currentPage = 1;
   questionsPerPage = 1;
   totalQuestions = 60;
   totalPages = this.totalQuestions;
   selectedAnswer: { [key: number]: string } = {};
 
   showResponseSaved:boolean = false;
 
   
 
   ngOnInit() {
     this.questions = this.shuffleArray([...QUESTION_BANK]); 
     this.startTimer();
   }
 startTimer() {
  this.interval = setInterval(() => {
    if (this.timerMinutes > 0) {
      this.timerMinutes--;
    } else {
      if (this.timerHours > 0) {
        this.timerHours--;
        this.timerMinutes = 59;
      } else {
        clearInterval(this.interval);
        alert("⏳ Time is over! Auto submitting...");
        this.submitAssignment();
      }
    }
  }, 60000); // runs every 1 minute
}
  
   shuffleArray(array: any[]) {
     return array.sort(() => Math.random() - 0.5);
   }
 
   get currentQuestion() {
     const index = this.currentPage - 1;
     return this.questions[index];
   }
 
   get currentQuestionIndex() {
     return this.currentPage;
   }
 
   get allQuestionsAnswered() {
     return Object.keys(this.selectedAnswer).length === this.totalQuestions;
   }
 
   selectOption(optionText: string) {
     if (this.currentQuestion) {
       this.selectedAnswer[this.currentQuestion.id] = optionText;
     }
   }
 
   nextQuestion() {
     if (this.currentPage < this.totalPages) {
       this.currentPage++;
     }
   }
 
   prevQuestion() {
     if (this.currentPage > 1) {
       this.currentPage--;
     }
   }
 
   submitAssignment() {
     alert("Your assignment has been submitted!");
   }
}
