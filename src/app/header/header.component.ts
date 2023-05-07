import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  public logout = '/login';

  checklogin(){
    const current = window.location.href;
    if(current.includes("login")) return true;
    else return false;
  }

  menuItems = [
    { name: 'Home', link: '/login' },
    { name: 'Admin', link: '/admin' },
    { name: 'Doctor', link: '/doctor' },
    { name: 'Patient', link: '/patient' }
  ];
}
