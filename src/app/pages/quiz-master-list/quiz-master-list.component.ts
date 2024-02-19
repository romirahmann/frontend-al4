import { Component } from '@angular/core';
import { SopService } from 'src/app/core/services/sop.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-master-list',
  templateUrl: './quiz-master-list.component.html',
  styleUrls: ['./quiz-master-list.component.scss'],
})
export class QuizMasterListComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  questions!: any;
  areas!: any;

  questionID!: number;

  // PAGINATION
  index: number = 1;
  pageSize: number = 20;
  currentPage: number = 1;
  totalPages: number = 0;
  displayQuestions: any;
  entires: any;
  document_id!: string;
  constructor(
    private sopService: SopService,
    private fb: FormBuilder,
    private route: Router
  ) {}

  ngOnInit() {
    this.getBreadCrumbItems();
    this.getAllQuestion();
  }

  getBreadCrumbItems() {
    this.breadCrumbItems = [{ label: `QUESTIONS LIST` }];
  }

  getAllQuestion() {
    this.sopService.getAllQuestions().subscribe((res: any) => {
      // console.log(res.data);
      this.questions = res.data;
      this.entires = this.questions.length;
      this.calculateTotalPages();
      this.updateDisplayQuestions();
    });
  }

  // Pagination
  calculateTotalPages() {
    this.totalPages = Math.ceil(this.entires / this.pageSize);
  }

  updateDisplayQuestions() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayQuestions = this.questions.slice(startIndex, endIndex);
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayQuestions();
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayQuestions();
    }
  }
  getStartIndex(): number {
    return (this.currentPage - 1) * this.pageSize + 1;
  }
  getEndIndex(): number {
    const endIndex: number = this.currentPage * this.pageSize;
    return Math.min(endIndex, this.entires);
  }
}
