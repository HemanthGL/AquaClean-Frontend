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
    isAdmin: false,
    role: '',
    companycred: '',
    cred: '',
  }

  isLogin: boolean = false;

  constructor( private http: HttpClient) { }

  companyLogInAttempt(companyId : string, pwd : string): IUser | null{
    let company! : IUser;

    this.getCompany(companyId).subscribe((data) => {
      company = data;
      console.log('retrieved company is')
      
      if (!company){
        alert('No Such company present!!')
        return null;
      }
      
      if (company.password == pwd){
        this.setLogInFalse();
        this.setLogInTrue('company', companyId)
        this.userLogIn.isCompany = true;
        console.log('setting log in as true')
        
        this.userLogIn.companycred = companyId;
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
      this.setLogInTrue('admin', adminId);
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
        this.setLogInTrue('superior', superiorId);
        localStorage.setItem('companycred', companyId);
        this.userLogIn.companycred = companyId;
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
        this.setLogInTrue('supervisor', supervisorId);
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
    return this.http.get('https://aquaclean-backend-production.up.railway.app/v1/company/' + companyId)
  }

  getSuperior(companyId: string, superiorId: string): Observable<any>{
    return this.http.get('https://aquaclean-backend-production.up.railway.app/v1/company/'+companyId+'/superior/'+superiorId);
  }

  getSupervisor(companyId: string, superiorId: string, supervisorId: string): Observable<any>{
    return this.http.get('https://aquaclean-backend-production.up.railway.app/v1/company/'+companyId+'/superior/'+superiorId+'/supervisor/'+ supervisorId);
  }

  setLogInFalse(){
    this.userLogIn.isAdmin = false;
    this.userLogIn.isCompany = false;
    this.userLogIn.isSuperior = false;
    this.userLogIn.isSupervisor = false;
    this.userLogIn.role = '';
    this.userLogIn.companycred = '';
    this.userLogIn.cred = '';
    localStorage.setItem('logIn', "false");
  }

  setLogInTrue(role: string, empId: string){
    console.log(' setting bool val as true')
    localStorage.setItem('logIn', "true");
    localStorage.setItem('role', role);
    localStorage.setItem('cred', empId);
  }
}
