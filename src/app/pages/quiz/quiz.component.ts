import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Option {
  id: string;
  text: string;
}

interface Question {
  text: string;
  options: Option[];
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  quizForm!: FormGroup;
  questions: Question[] = [
    {
      text: 'What is the capital of France?',
      options: [
        { id: 'paris', text: 'Paris' },
        { id: 'berlin', text: 'Berlin' },
        { id: 'london', text: 'London' },
      ],
    },
    {
      text: 'Who wrote Hamlet?',
      options: [
        { id: 'shakespeare', text: 'William Shakespeare' },
        { id: 'dickens', text: 'Charles Dickens' },
        { id: 'twain', text: 'Mark Twain' },
      ],
    },
  ];
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.createForm();
  }
  createForm(): void {
    const group: Record<string, any> = {}; // Menambahkan tipe untuk group
    this.questions.forEach((question, index) => {
      group['question' + index] = '';
    });
    this.quizForm = this.fb.group(group);
  }
  submitQuiz(): void {
    console.log(this.quizForm.value);
    // Handle submission logic here
  }
}
