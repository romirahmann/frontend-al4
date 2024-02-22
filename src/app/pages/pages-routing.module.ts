import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component pages
import { DashboardComponent } from './dashboards/dashboard/dashboard.component';
import { MasterComponent } from './master/master.component';
import { SuppliesComponent } from './supplies/supplies.component';

import { EditSupplyComponent } from './supplies/editsupply/editsupply.component';
import { DetailSupplyComponent } from './supplies/detailsupply/detailsupply.component';
import { AddSupplyComponent } from './supplies/addsupply/addsupply.component';

// SOP pages
import { SopUtamaComponent } from './sop-utama/sop-utama.component';
import { WiGeneralComponent } from './listWI/wi-general/wi-general.component';
// SOP CRUD
import { AddGeneralComponent } from './listWI/layouts/wiGeneral/add/add.component';
import { UpdateGeneralComponent } from './listWI/layouts/wiGeneral/update/update.component';
import { ViewGeneralComponent } from './listWI/layouts/wiGeneral/view/view.component';
import { ListpageComponent } from './listpage/listpage.component';
import { MasterListComponent } from './listWI/master-list/master-list.component';
import { ListUserProgressComponent } from './list-user-progress/list-user-progress.component';
import { RegisterProgressComponent } from './list-user-progress/register-progress/register-progress.component';

// MaintenanceComponent
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { AddPartComponent } from './maintenance/layouts/add-part/add-part.component';
import { UpdatePartComponent } from './maintenance/layouts/update-part/update-part.component';
import { DetailPartComponent } from './maintenance/layouts/detail-part/detail-part.component';
import { AddOutputComponent } from './maintenance/layouts/detail-part/add-output/add-output.component';
import { AddmasterComponent } from './master/addmaster/addmaster.component';
import { EditmasterComponent } from './master/editmaster/editmaster.component';
import { DashboardGroupComponent } from './list-user-progress/dashboard-group/dashboard-group.component';
import { FirstPageComponent } from './maintenance/first-page/first-page.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizMasterListComponent } from './quiz-master-list/quiz-master-list.component';
import { AddQuestionComponent } from './quiz-master-list/add-question/add-question.component';
import { OplComponent } from './maintenance/opl/opl.component';
import { EditQuestionComponent } from './quiz-master-list/edit-question/edit-question.component';
import { DetailQuestionComponent } from './quiz-master-list/detail-question/detail-question.component';
import { EditAnswerComponent } from './quiz-master-list/edit-answer/edit-answer.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'master',
    component: MasterComponent,
  },
  {
    path: 'OPL',
    component: OplComponent,
  },

  {
    path: '',
    redirectTo: '/supplies',
    pathMatch: 'full',
  },
  {
    path: 'supplies',
    component: SuppliesComponent,
  },
  {
    path: 'add-supply',
    component: AddSupplyComponent,
  },
  {
    path: 'edit-supply/:id',
    component: EditSupplyComponent,
  },
  {
    path: 'detail-supply/:id',
    component: DetailSupplyComponent,
  },

  // ROUTING SOP
  {
    path: 'sop',
    component: SopUtamaComponent,
  },
  { path: 'wi-general/:area_id/:user_id', component: WiGeneralComponent },
  { path: 'master-list', component: MasterListComponent },
  { path: 'list-user-progress/:area_id', component: ListUserProgressComponent },
  {
    path: 'register-progress/:userId/:areaId',
    component: RegisterProgressComponent,
  },
  { path: 'dashboard-group/:groupId', component: DashboardGroupComponent },

  // ROUTING SOP CRUD
  {
    path: 'add-document',
    component: AddGeneralComponent,
  },
  {
    path: 'update-document/:document_id',
    component: UpdateGeneralComponent,
  },
  {
    path: 'view-general/:document_id',
    component: ViewGeneralComponent,
  },

  // PAGE MAINTENANCE
  {
    path: 'maintenance',
    component: FirstPageComponent,
  },
  {
    path: 'part-maintenance/:areaId',
    component: MaintenanceComponent,
  },
  {
    path: 'add-part',
    component: AddPartComponent,
  },
  {
    path: 'update-part/:partId/:areaId',
    component: UpdatePartComponent,
  },
  {
    path: 'detail-part/:partId',
    component: DetailPartComponent,
  },

  {
    path: 'add-output/:partId',
    component: AddOutputComponent,
  },
  {
    path: 'listpage',
    component: ListpageComponent,
  },
  {
    path: 'supplies/:area',
    component: SuppliesComponent,
  },
  {
    path: 'app-addmaster',
    component: AddmasterComponent,
  },
  {
    path: 'app-editmaster/:id',
    component: EditmasterComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  },
  {
    path: 'master-list-quiz',
    component: QuizMasterListComponent,
  },
  {
    path: 'add-question',
    component: AddQuestionComponent,
  },
  {

    path: 'Maintenance',
    component: FirstPageComponent,
  },

    path: 'edit-question',
    component: EditQuestionComponent,
  },
  {
    path: 'edit-asnwer/:id/:idQuestion',
    component: EditAnswerComponent,
  },
  {
    path: 'detail-question/:id',
    component: DetailQuestionComponent,
  },

  {
    path: '',
    loadChildren: () =>
      import('./dashboards/dashboards.module').then((m) => m.DashboardsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
