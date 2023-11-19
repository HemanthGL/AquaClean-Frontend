import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IOnboardSupervisor } from 'src/interfaces/IOnboardSupervisor';
import { OnboardingService } from 'src/services/onboarding.service';

@Component({
  selector: 'app-add-supervisor',
  templateUrl: './add-supervisor.component.html',
  styleUrls: ['./add-supervisor.component.scss']
})
export class AddSupervisorComponent {

  constructor(private fb: FormBuilder, private onboardServe: OnboardingService) {}

  fg!: FormGroup;

  ngOnInit(){
    this.fg = this.fb.group({
      supervisorFullName: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]], 
      employeeId: ['', [
        Validators.required
      ]],
      plantName: ['', [
        Validators.required
      ]],
      plantId: ['', [
        Validators.required
      ]],
      emailId: ['', [
        Validators.required
      ]]
    
    })
  }

   onSubmit(event: MouseEvent){
      let submitData: IOnboardSupervisor = {
        supervisorFullName : this.fg.controls['supervisorFullName'].value,
        password : this.fg.controls['password'].value,
        employeeId : this.fg.controls['employeeId'].value,
        plantName : this.fg.controls['plantName'].value,
        plantId : this.fg.controls['plantId'].value,
        emailId: this.fg.controls['emailId'].value
      }

      this.onboardServe.onboardSupervisor(submitData);

   }

}
