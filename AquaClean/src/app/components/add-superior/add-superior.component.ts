import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IOnboardSuperior } from 'src/interfaces/IOnboardSuperior';
import { OnboardingService } from 'src/services/onboarding.service';

@Component({
  selector: 'app-add-superior',
  templateUrl: './add-superior.component.html',
  styleUrls: ['./add-superior.component.scss']
})
export class AddSuperiorComponent {

  constructor(private fb: FormBuilder, private onboardingServe: OnboardingService){}

  fg!: FormGroup;

  ngOnInit(){
    this.fg = this.fb.group({
      superiorFullName: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]],
      employeeId: ['', [
        Validators.required
      ]],
      emailId: ['', [
        Validators.required
      ]]
    })
  }

  onSubmit(event: MouseEvent){
    let addSuperior: IOnboardSuperior = {
      superiorFullName : this.fg.controls['superiorFullName'].value,
      password: this.fg.controls['password'].value,
      employeeId: this.fg.controls['employeeId'].value,
      emailId: this.fg.controls['emailId'].value
    }

    this.onboardingServe.onboardSuperior(addSuperior);
  }
}
