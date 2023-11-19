import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AquaClean';

  constructor(private authServe: AuthService) {}

  ngOnInit(): void {
    if (localStorage.getItem('logIn') == 'true'){
      switch(localStorage.getItem('role')){
        case 'admin': 
            this.authServe.userLogIn.isAdmin = true;
            break;
        case 'company': 
            this.authServe.userLogIn.isCompany = true;
            break;
        case 'supervisor': 
            this.authServe.userLogIn.isSupervisor = true;
            break;
        case 'superior': 
            this.authServe.userLogIn.isSuperior = true;
            break;
      }
      if (localStorage.getItem('role') != null)
        this.authServe.userLogIn.role = localStorage.getItem('role')!
      else 
        console.log('Role not set, event when Logged In, BUG FOUND')

      if (localStorage.getItem('cred') != null)
        this.authServe.userLogIn.cred = localStorage.getItem('cred')!
      else
        console.log('Cred not set, even when Logged In, BUG FOUND')
    }
  }

  user = {
    isSuperior: false,
    isSupervisor: false,
    isCompany: false,
    isAdmin: false
  }

  checkLogIn(){
    let value: boolean = localStorage.getItem('logIn') == "true";
    this.setUserObj();
    return value;
  }

  setLogOut(){
    localStorage.setItem('logIn', "false")
    localStorage.removeItem('role')
    localStorage.removeItem('cred');
    localStorage.removeItem('companycred')
    this.authServe.setLogInFalse();
  }

  setUserObj(){
    this.user = this.authServe.userLogIn;
  }

}
