import { _isNumberValue } from '@angular/cdk/coercion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISuperior } from 'src/interfaces/ISuperior';
import { ISupervisor } from 'src/interfaces/ISupervisor';
import { IUser } from 'src/interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogIn = {
    isSuperior: false,
    isSupervisor: false,
    isCompany: false,
    isAdmin: false
  }

  isLogin: boolean = false;

  constructor( private http: HttpClient) { }

  companyLogInAttempt(companyId : string, pwd : string): IUser | null{
    let company! : IUser;

    this.getCompany(companyId).subscribe((data) => {
      company = data;
      console.log('retrieved company is')
      console.log(company);
      
      if (!company){
        alert('No Such company present!!')
        return null;
      }
      
      if (company.password == pwd){
        this.setLogInFalse;
        this.setLogInTrue()
        this.userLogIn.isCompany = true;
        console.log('setting log in as true')
        
        return company;
      }
      
      alert('Incorrect Password for Company LogIn')
      return null
    })
    return null;
  }

  adminLogInAttempt(adminId : string, password: string){
    if (adminId == 'admin' && password == 'admin'){
      this.setLogInFalse()
      this.setLogInTrue();
      this.userLogIn.isAdmin = true;
      return true
    }
    return false;
  }
  
  superiorLogInAttempt(companyId: string, superiorId: string, password: string): ISuperior | null{
    let superior! : ISuperior | null;

    this.getSuperior(companyId, superiorId).subscribe((data) => {
      superior = data;

      if (!superior){
        alert('No Such Superior, check credentials...')
        return null;
      }
      if (data.password == password){
        this.setLogInFalse();
        this.setLogInTrue();
        this.userLogIn.isSuperior = true;
        console.log('setting superior Log In true')

        return superior
      }

      alert('Password Incorrect!!');
      return null;
    })

    return null;
  }

  supervisorLogInAttempt(companyId : string, superiorId : string, supervisorId : string, password: string):ISupervisor | null{
    let supervisor! : ISupervisor | null;

    this.getSupervisor(companyId, superiorId, supervisorId).subscribe((data : ISupervisor | null) => {
      supervisor = data

      if (!supervisor){
        alert('No Such Supervisor, check credentials...')
        return null;
      }
      if (supervisor.password == password){
        this.setLogInFalse();
        this.setLogInTrue();
        this.userLogIn.isSupervisor = true;
        console.log('Supervisor Logged In')

        supervisor.companyId = companyId
        return supervisor
      }
      alert('Password Incorrect, check credentials and try again...')
      return null;
    })

    return null
    
  }


  getCompany(companyId : string): Observable<any>{
    return this.http.get('http://localhost:8080/v1/company/' + companyId)
  }

  getSuperior(companyId: string, superiorId: string): Observable<any>{
    return this.http.get('http://localhost:8080/v1/company/'+companyId+'/superior/'+superiorId);
  }

  getSupervisor(companyId: string, superiorId: string, supervisorId: string): Observable<any>{
    return this.http.get('http://localhost:8080/v1/company/'+companyId+'/superior/'+superiorId+'/supervisor/'+superiorId);
  }

  setLogInFalse(){
    this.userLogIn.isAdmin = false;
    this.userLogIn.isCompany = false;
    this.userLogIn.isSuperior = false;
    this.userLogIn.isSupervisor = false;
    localStorage.setItem('logIn', "false");
  }

  setLogInTrue(){
    console.log(' setting bool val as true')
    localStorage.setItem('logIn', "true");
  }
}
