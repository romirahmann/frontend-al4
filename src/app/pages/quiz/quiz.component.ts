import { AuthService } from 'src/app/core/services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SopService } from 'src/app/core/services/sop.service';

interface Answer {
  answer_id: number;
  answer_text: string;
  status: number;
}

interface QuizQuestion {
  question_id: number;
  question_text: string;
  answers: Answer[];
  score: number;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  quizForm!: FormGroup;
  questionsWithAnswers: QuizQuestion[] = [];
  totalScore: number = 0;

  constructor(
    private fb: FormBuilder,
    private sopService: SopService,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.createForm();
    this.getAreaID();
  }

  getAreaID() {
    const areaName = this.authService.getAreaName();

    // console.log(areaName);
    if (areaName === 'IBF') {
      let id = 1;
      this.getQuestions(id);
    }
    if (areaName === 'PREPARASI') {
      let id = 2;
      this.getQuestions(id);
    }
    if (areaName === 'PACKING') {
      let id = 3;
      this.getQuestions(id);
    }
  }
  createForm(): void {
    const group: Record<string, any> = {};
    this.questionsWithAnswers.forEach((question, index) => {
      group['question' + index] = '';
    });
    this.quizForm = this.fb.group(group);
  }

  getQuestions(id: number) {
    this.sopService.getQuestionByAreaID(id).subscribe((res: any) => {
      this.questionsWithAnswers = res.data.questionsWithAnswers;
      this.createForm(); // Panggil createForm setelah mendapatkan data
      // console.log(this.questionsWithAnswers);
    });
  }

  submitQuiz(): void {
    console.log(this.quizForm.value);
  }
}
