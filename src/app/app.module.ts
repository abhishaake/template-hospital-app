import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { PatientComponent } from './patient/patient.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { HeaderComponent } from './header/header.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    DoctorComponent,
    DoctorRegisterComponent,
    PatientComponent,
    PatientRegisterComponent,
    HeaderComponent,
    PatientDetailsComponent,
    DoctorDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgSelectModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbTooltipModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
