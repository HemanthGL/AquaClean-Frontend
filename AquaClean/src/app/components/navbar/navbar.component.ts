import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  constructor(private router: Router, public authServe : AuthService) {}
  user = {
    isSuperior: false,
    isSupervisor: false,
    isCompany: false,
    isAdmin: false
  }
  isLogIn = false;

  ngOnInit(){
    this.user = this.authServe.userLogIn;

  }

  setUserObj(){
    this.user = this.authServe.userLogIn;
  }
  
  // ngOnChanges(changes: SimpleChanges): void {
  //   if (this.authServe.isLogin){
  //     console.log('loging stats changed')
  //   }
  // }

  onLogInAttempt(){
    this.router.navigate(['/logIn'])
  }

  checkLogIn(){
    let value: boolean = localStorage.getItem('logIn') == "true";
    this.setUserObj();
    return value;
  }
  
  setLogOut(){
    localStorage.setItem('logIn', "false")
    this.authServe.setLogInFalse();
  }
}
