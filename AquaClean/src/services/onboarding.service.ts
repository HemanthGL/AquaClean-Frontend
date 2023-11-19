import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOnboardCompany } from 'src/interfaces/IOnboardCompany';
import { IOnboardSuperior } from 'src/interfaces/IOnboardSuperior';
import { IOnboardSupervisor } from 'src/interfaces/IOnboardSupervisor';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  constructor(private http: HttpClient) { }

  onboardSupervisor(newSupervisor: IOnboardSupervisor){
    if (localStorage.getItem('role') != 'superior'){
      console.error('Role of Account is not Superior, hence Onboarding Supervisor authorization revoked.')
    } else {
      if (localStorage.getItem('companycred') != null){
        let companyId: string | null = localStorage.getItem('companycred')
        let superiorId: string | null = localStorage.getItem('cred')
        if (superiorId == null){
          console.error('Superior ID not available, returning to base')
        } else {
          this.http.post('https://aquaclean-backend-production.up.railway.app/v1/company/'+companyId+'/superior/'+superiorId+'/supervisor', newSupervisor).subscribe(data => console.log('this is returned subscription' + data))

          console.log('supervisor added')
        }
      }
    }
  }

  onboardSuperior(newSuperior: IOnboardSuperior){
    if (localStorage.getItem('role') != 'company'){
      console.error('Role of Account is not Company, hence Onboarding Superior authorization revoked.')
    } else {
      if (localStorage.getItem('cred') != null){
        let companyId: string | null = localStorage.getItem('cred')
        if (companyId == null){
          console.error('CompanyID not available, returning to base')
        } else {
          this.http.post('https://aquaclean-backend-production.up.railway.app/v1/company/'+companyId+'/superior/', newSuperior).subscribe(data => console.log('this is returned subscription' + data))

          console.log('superior added')
        }
      }
    }
  }

  onboardCompany(newCompany: IOnboardCompany){
    if (localStorage.getItem('role') != 'admin'){
      console.error('Role of Logged In Account is not Admin, hence Onboarding Company authorization revoked.')
    } else {
      
      this.http.post('https://aquaclean-backend-production.up.railway.app/v1/company/', newCompany).subscribe(data => console.log('this is returned subscription' + data))

      console.log('company added')
    }
  }

}
