import { AuthService } from 'src/app/core/services/auth.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SopService } from 'src/app/core/services/sop.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

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
  userId!: number;
  @ViewChild('succesModal') succesModal!: ElementRef;
  constructor(
    private fb: FormBuilder,
    private sopService: SopService,
    private authService: AuthService,
    private modalService: NgbModal,
    private route: Router
  ) {}
  ngOnInit() {
    this.createForm();
    this.getAreaID();
  }

  getAreaID() {
    const areaName = this.authService.getAreaName();
    const user_id = this.authService.getUserId();

    if (user_id) {
      this.userId = parseInt(user_id);
    }

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
    });
  }

  submitQuiz(): void {
    let dataAnswer = this.quizForm.value;

    let answerUsers = {
      question_1: dataAnswer.question0,
      question_2: dataAnswer.question1,
      question_3: dataAnswer.question2,
      question_4: dataAnswer.question3,
      question_5: dataAnswer.question4,
    };

    let score: number = 0;

    Object.entries(answerUsers).forEach(([key, value]) => {
      let question = value[0];
      let answer = value[1];

      if (answer.status === 1) {
        score = score + question.score;
        // if (this.userId) {
        //   this.sopService
        //     .addResultUser({
        //       id_user: this.userId,
        //       score: question.score,
        //       question_id: question.question_id,
        //     })
        //     .subscribe((res: any) => {
        //       console.log('Add Result True Success!', res);
        //     });
        // }
        // console.log('Perulangan Score benar: ', score);
      }
      if (answer.status === 0) {
        score = score + 0;
        // if (this.userId) {
        //   this.sopService
        //     .addResultUser({
        //       id_user: this.userId,
        //       score: 0,
        //       question_id: question.question_id,
        //     })
        //     .subscribe((res: any) => {
        //       console.log('Add Result False Success!', res);
        //     });
        // }
        // console.log('Perulangan Score Salah: ', score);
      }
    });

    this.openModal(this.succesModal, score);
  }

  openModal(content: any, score: number) {
    this.totalScore = score;
    this.modalService.open(content, { centered: true });
  }
  back() {
    this.modalService.dismissAll();
    this.route.navigate(['/sop']);
  }
}
