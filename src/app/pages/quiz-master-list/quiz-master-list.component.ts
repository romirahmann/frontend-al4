import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-master-list',
  templateUrl: './quiz-master-list.component.html',
  styleUrls: ['./quiz-master-list.component.scss'],
})
export class QuizMasterListComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor() {}

  ngOnInit() {
    this.getBreadCrumbItems();
  }

  getBreadCrumbItems() {
    this.breadCrumbItems = [{ label: `QUESTIONS LIST` }];
  }
}
