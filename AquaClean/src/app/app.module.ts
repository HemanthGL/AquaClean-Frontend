import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../modules/material/material.module'
import { HttpClientModule } from '@angular/common/http';
import { QCReportComponent } from './components/qcreport/qcreport.component';
import { AddSupervisorComponent } from './components/add-supervisor/add-supervisor.component';
import { AddSuperiorComponent } from './components/add-superior/add-superior.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { ViewSuperiorsComponent } from './components/view-superiors/view-superiors.component';
import { ViewSupervisorsComponent } from './components/view-supervisors/view-supervisors.component';
import { HomeComponent } from './components/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginformComponent,
    QCReportComponent,
    AddSupervisorComponent,
    AddSuperiorComponent,
    AddCompanyComponent,
    ViewSuperiorsComponent,
    ViewSupervisorsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
