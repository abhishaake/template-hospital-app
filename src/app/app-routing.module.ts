import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { PatientComponent } from './patient/patient.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'doctor',
    component: DoctorComponent
  },
  {
    path:'doctorregister',
    component: DoctorRegisterComponent
  },
  {
    path:'patient',
    component: PatientComponent
  },
  {
    path:'patientregister',
    component: PatientRegisterComponent
  }
  ,
  {
    path:'patientdetails',
    component: PatientDetailsComponent
  }
  ,
  {
    path:'doctordetails',
    component: DoctorDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
