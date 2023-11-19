import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IOnboardCompany } from 'src/interfaces/IOnboardCompany';
import { OnboardingService } from 'src/services/onboarding.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent {

  constructor(private fb: FormBuilder, private onboardServe: OnboardingService){}

  fg!: FormGroup

  ngOnInit(){
    this.fg = this.fb.group({
      'companyId' : ['', [
        Validators.required
      ]],
      'companyUserName': ['',[
        Validators.required
      ]],
      'password': ['', [
        Validators.required
      ]]
    })
  }

  onSubmit(event: MouseEvent){
    let addCompany: IOnboardCompany = {
      companyUserName : this.fg.controls['companyUserName'].value,
      companyId : this.fg.controls['companyId'].value,
      password : this.fg.controls['password'].value
    }

    this.onboardServe.onboardCompany(addCompany);
  }

}
