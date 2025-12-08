import { Component, OnInit, OnDestroy } from '@angular/core';
import { QUESTION_BANK } from './question';

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
export class BackEndAssignmentComponent implements OnInit, OnDestroy {

  username = "Chandana";

  questions: Question[] = QUESTION_BANK;
  totalQuestions = this.questions.length;

  currentPage = 1;
  totalPages = this.totalQuestions;

  currentQuestion: Question | null = null;
  currentQuestionIndex = 1;

  // User answers
  selectedAnswer: { [key: number]: string } = {};
  markedForReview: { [key: number]: boolean } = {};

  // Palette (10 at a time)
  visiblePalette: any[] = [];
  paletteIndex = 0; // 0–9, 10–19, 20–29 ...

  // Timer
  timerHours = 1;
  timerMinutes = 0;
  timerInterval: any;

  ngOnInit() {
    this.loadQuestion();
    this.updatePalette();
    this.startTimer();
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }

  // Load current question
  loadQuestion() {
    this.currentQuestion = this.questions[this.currentPage - 1];
    this.currentQuestionIndex = this.currentPage;
  }

  // Navigation: NEXT
  nextQuestion() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadQuestion();
    }
  }

  // Navigation: PREV
  prevQuestion() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadQuestion();
    }
  }

  // Selecting an option
  selectOption(option: string) {
    if (this.currentQuestion) {
      this.selectedAnswer[this.currentQuestion.id] = option;
    }
  }

  // Go to a specific question from palette
  goToQuestion(page: number) {
    this.currentPage = page;
    this.loadQuestion();
  }

  updatePalette() {
  this.visiblePalette = this.questions.map((q, index) => ({
    id: q.id,
    page: index + 1
  }));
}

  // Timer logic
  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.timerMinutes === 0 && this.timerHours > 0) {
        this.timerHours--;
        this.timerMinutes = 59;
      } else if (this.timerMinutes > 0) {
        this.timerMinutes--;
      } else {
        clearInterval(this.timerInterval);
      }
    }, 60000);
  }

  // Submit
  submitAssignment() {
    alert("Assignment Submitted!");
  }
}
