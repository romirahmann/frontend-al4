import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {
  NgbToastModule,
  NgbProgressbarModule,
} from '@ng-bootstrap/ng-bootstrap';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CountToModule } from 'angular-count-to';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
import { CKEditorModule } from 'ckeditor4-angular';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { LightboxModule } from 'ngx-lightbox';
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WidgetModule } from '../shared/widget/widget.module';
import { DashboardComponent } from './dashboards/dashboard/dashboard.component';
import { ToastsContainer } from './dashboards/dashboard/toasts-container.component';
import { DashboardsModule } from './dashboards/dashboards.module';
import { MasterComponent } from './master/master.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { EditSupplyComponent } from './supplies/editsupply/editsupply.component';
import { DetailSupplyComponent } from './supplies/detailsupply/detailsupply.component';
import { AddSupplyComponent } from './supplies/addsupply/addsupply.component';
import { SopUtamaComponent } from './sop-utama/sop-utama.component';
import { WiGeneralComponent } from './listWI/wi-general/wi-general.component';
import { AddGeneralComponent } from './listWI/layouts/wiGeneral/add/add.component';
import { UpdateGeneralComponent } from './listWI/layouts/wiGeneral/update/update.component';
import { ViewGeneralComponent } from './listWI/layouts/wiGeneral/view/view.component';
import { ViewIbfComponent } from './listWI/layouts/wiIBF/view/view.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ListpageComponent } from './listpage/listpage.component';
import { MasterListComponent } from './listWI/master-list/master-list.component';
import { ListUserProgressComponent } from './list-user-progress/list-user-progress.component';
import { RegisterProgressComponent } from './list-user-progress/register-progress/register-progress.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { AddPartComponent } from './maintenance/layouts/add-part/add-part.component';
import { UpdatePartComponent } from './maintenance/layouts/update-part/update-part.component';
import { DetailPartComponent } from './maintenance/layouts/detail-part/detail-part.component';
import { AddOutputComponent } from './maintenance/layouts/detail-part/add-output/add-output.component';
import { ExportAsModule } from 'ngx-export-as';
import { AddmasterComponent } from './master/addmaster/addmaster.component';
import { EditmasterComponent } from './master/editmaster/editmaster.component';
import { DashboardGroupComponent } from './list-user-progress/dashboard-group/dashboard-group.component';
import { FirstPageComponent } from './maintenance/first-page/first-page.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizMasterListComponent } from './quiz-master-list/quiz-master-list.component';
import { AddQuestionComponent } from './quiz-master-list/add-question/add-question.component';
import { OplComponent } from './maintenance/opl/opl.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ToastsContainer,
    MasterComponent,
    SuppliesComponent,
    AddSupplyComponent,
    EditSupplyComponent,
    DetailSupplyComponent,
    SopUtamaComponent,
    WiGeneralComponent,
    AddGeneralComponent,
    UpdateGeneralComponent,
    ViewGeneralComponent,
    ViewIbfComponent,
    ListpageComponent,
    MasterListComponent,
    ListUserProgressComponent,
    RegisterProgressComponent,
    MaintenanceComponent,
    AddPartComponent,
    UpdatePartComponent,
    DetailPartComponent,
    AddOutputComponent,
    AddmasterComponent,
    EditmasterComponent,
    DashboardGroupComponent,
    FirstPageComponent,
    QuizComponent,
    QuizMasterListComponent,
    AddQuestionComponent,
    OplComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbToastModule,
    NgbProgressbarModule,
    FlatpickrModule.forRoot(),
    CountToModule,
    NgApexchartsModule,
    LeafletModule,
    NgbDropdownModule,
    SimplebarAngularModule,
    PagesRoutingModule,
    SharedModule,
    WidgetModule,
    NgxUsefulSwiperModule,
    LightboxModule,
    DashboardsModule,
    CKEditorModule,
    NgbPaginationModule,
    ExportAsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
