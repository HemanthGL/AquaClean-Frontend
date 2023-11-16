import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './components/loginform/loginform.component';
import { QCReportComponent } from './components/qcreport/qcreport.component';

const routes: Routes = [
  {
    path: 'logIn',
    component: LoginformComponent
  }, 
  {
    path: 'fillQualityCheckReport',
    component: QCReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
