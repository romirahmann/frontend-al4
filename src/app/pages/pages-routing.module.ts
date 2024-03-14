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
import { MaintenancePetComponent } from './maintenance-part/maintenance-pet/maintenance-pet.component';
import { FirstPagePetComponent } from './maintenance-part/maintenance-pet/first-page-pet/first-page-pet.component';
import { AddPartPetComponent } from './maintenance-part/maintenance-pet/layouts-pet/add-part-pet/add-part-pet.component';
import { UpdatePartPetComponent } from './maintenance-part/maintenance-pet/layouts-pet/update-part-pet/update-part-pet.component';
import { DetailPartPetComponent } from './maintenance-part/maintenance-pet/layouts-pet/detail-part-pet/detail-part-pet.component';
import { AddOutputPetComponent } from './maintenance-part/maintenance-pet/layouts-pet/detail-part-pet/add-output-pet/add-output-pet.component';
import { MaintenanceCanComponent } from './maintenance-part/maintenance-can/maintenance-can.component';
import { FirstPageCanComponent } from './maintenance-part/maintenance-can/first-page-can/first-page-can.component';
import { AddPartCanComponent } from './maintenance-part/maintenance-can/layout-can/add-part-can/add-part-can.component';
import { UpdatePartCanComponent } from './maintenance-part/maintenance-can/layout-can/update-part-can/update-part-can.component';
import { DetailPartCanComponent } from './maintenance-part/maintenance-can/layout-can/detail-part-can/detail-part-can.component';
import { AddOutputCanComponent } from './maintenance-part/maintenance-can/layout-can/detail-part-can/add-output-can/add-output-can.component';
import { MaintenanceGblComponent } from './maintenance-part/maintenance-gbl/maintenance-gbl.component';
import { FirstPageGblComponent } from './maintenance-part/maintenance-gbl/first-page-gbl/first-page-gbl.component';
import { AddPartGblComponent } from './maintenance-part/maintenance-gbl/layout-gbl/add-part-gbl/add-part-gbl.component';
import { UpdatePartGblComponent } from './maintenance-part/maintenance-gbl/layout-gbl/update-part-gbl/update-part-gbl.component';
import { AddOutputGblComponent } from './maintenance-part/maintenance-gbl/layout-gbl/detail-part-gbl/add-output-gbl/add-output-gbl.component';
import { ViewFilterSuppliesComponent } from './supplies/view-filter-supplies/view-filter-supplies.component';
import { DetailPartGblComponent } from './maintenance-part/maintenance-gbl/layout-gbl/detail-part-gbl/detail-part-gbl.component';

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
  {
    path: 'view-filter-supplies',
    component: ViewFilterSuppliesComponent,
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
  //maintenance-part PET
  {
    path: 'part-maintenance-pet/:areaId',
    component: MaintenancePetComponent,
  },
  {
    path: 'maintenance-pet',
    component: FirstPagePetComponent,
  },
  {
    path: 'add-part-pet',
    component: AddPartPetComponent,
  },
  {
    path: 'update-part-pet/:partId/:areaId',
    component: UpdatePartPetComponent,
  },
  {
    path: 'detail-part-pet/:partId',
    component: DetailPartPetComponent,
  },
  {
    path: 'add-output-pet/:partId',
    component: AddOutputPetComponent,
  },

   //maintenance-part GBL
   {
    path: 'part-maintenance-gbl/:areaId',
    component: MaintenanceGblComponent,
  },
  {
    path: 'maintenance-gbl',
    component: FirstPageGblComponent,
  },
  {
    path: 'add-part-gbl',
    component: AddPartGblComponent,
  },
  {
    path: 'update-part-gbl/:partId/:areaId',
    component: UpdatePartGblComponent,
  },
  {
    path: 'detail-part-gbl/:partId',
    component: DetailPartGblComponent,
  },
  {
    path: 'add-output-gbl/:partId',
    component: AddOutputGblComponent,
  },
  //maintenance-part CAN
  {
    path: 'part-maintenance-\can/:areaId',
    component: MaintenanceCanComponent,
  },
  {
    path: 'maintenance-can',
    component: FirstPageCanComponent,
  },
  {
    path: 'add-part-can',
    component: AddPartCanComponent,
  },
  {
    path: 'update-part-can/:partId/:areaId',
    component: UpdatePartCanComponent,
  },
  {
    path: 'detail-part-can/:partId',
    component: DetailPartCanComponent,
  },
  {
    path: 'add-output-can/:partId',
    component: AddOutputCanComponent,
  },
  //SUPLIES
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
  {
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