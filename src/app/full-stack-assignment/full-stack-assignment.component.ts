import { Component, OnInit } from '@angular/core';
import { QUESTION_BANK } from './question';

@Component({
  selector: 'app-full-stack-assignment',
  templateUrl: './full-stack-assignment.component.html',
  styleUrls: ['./full-stack-assignment.component.css']
})
export class FullStackAssignmentComponent implements OnInit {

  username = 'chandana';
  
   timerHours: number = 0;
   timerMinutes: number = 0;
   timerSeconds: number = 0;

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

    this.timerSeconds++;

    if (this.timerSeconds === 60) {
      this.timerSeconds = 0;
      this.timerMinutes++;
    }

    if (this.timerMinutes === 60) {
      this.timerMinutes = 0;
      this.timerHours++;
    }

  }, 1000); // runs every second
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
