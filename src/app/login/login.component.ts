import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginUser = 'admin';
  public role = 'admin';



  changeUser(): void{
    console.log("role = " + this.role);
    if(this.role==='patientdetails'){
      localStorage['isPatient'] =true;
      console.log("check = "+ localStorage['isPatient']); 
    }
    else{
      localStorage['isPatient'] =false;
      console.log("check = "+ localStorage['isPatient']);
    }
    this.loginUser = this.role;
  }

  login(){
    console.log("clicked");
    window.location.href = "/" + this.role;
  }
}
