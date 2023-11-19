import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './components/loginform/loginform.component';
import { QCReportComponent } from './components/qcreport/qcreport.component';
import { AddSupervisorComponent } from './components/add-supervisor/add-supervisor.component';
import { AddSuperiorComponent } from './components/add-superior/add-superior.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { ViewSuperiorsComponent } from './components/view-superiors/view-superiors.component';
import { ViewSupervisorsComponent } from './components/view-supervisors/view-supervisors.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'logIn',
    component: LoginformComponent
  }, 
  {
    path: 'fillQualityCheckReport',
    component: QCReportComponent
  },
  {
    path: 'addSupervisor',
    component: AddSupervisorComponent
  },
  {
    path: 'addSuperior',
    component: AddSuperiorComponent
  },
  {
    path: 'addCompany',
    component: AddCompanyComponent
  },
  {
    path: 'viewSuperiors',
    component: ViewSuperiorsComponent
  },
  {
    path: 'viewSupervisors',
    component: ViewSupervisorsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
