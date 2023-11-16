import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPlantVisit } from 'src/interfaces/IPlantVisit';
import { PlantVisitsService } from 'src/services/plant-visits.service';

@Component({
  selector: 'app-qcreport',
  templateUrl: './qcreport.component.html',
  styleUrls: ['./qcreport.component.scss']
})
export class QCReportComponent {

  constructor(private fb: FormBuilder, private plantVisit: PlantVisitsService) {}

  fg! : FormGroup

  ngOnInit(){
    this.fg = this.fb.group({
      plantVisitId: ['', [
        Validators.required
      ]],
      plantName: ['', [
        Validators.required
      ]],
      plantId: ['', [
        Validators.required
      ]],
      supervisorId: ['', [
        Validators.required
      ]],
      turbidity: ['', [
        Validators.required
      ]],
      temp: ['', [
        Validators.required
      ]],
      color: ['', [
        Validators.required
      ]],
      tds: ['', [
        Validators.required
      ]],
      electCond: ['', [
        Validators.required
      ]],
      pH: ['', [
        Validators.required
      ]],
      chloride: ['', [
        Validators.required
      ]],
      fluoride: ['', [
        Validators.required
      ]],
      hardness: ['', [
        Validators.required
      ]],
      dissolvedo2: ['', [
        Validators.required
      ]]
    })

    // this.fg.controls['role'].valueChanges.subscribe(value => {
      // this.isAdmin = false;
      // this.isCompany = false;
      // this.isSuperior = false;
      // this.isSupervisor = false;

      // switch(value){
      //   case 'Admin':
      //     this.isAdmin = true;
      //     break
      //   case 'Company':
      //     this.isCompany = true;
      //     break
      //   case 'Superior':
      //     this.isSuperior = true;
      //     break 
      //   case 'Supervisor':
      //     this.isSupervisor = true;
      //     break
      // }
    // })
  }

  /**
   * 
   * @param event Mouse click event on Submit button
   * @description redirects to users page on succesfuly submission of Form
   */
  onSubmit(event: MouseEvent){

    let obj: IPlantVisit = {
      plantVisitId: this.fg.controls['plantVisitId'].value,
      plantName: this.fg.controls['plantName'].value,
      plantId: this.fg.controls['plantId'].value,
      supervisorId: this.fg.controls['supervisorId'].value,
      turbidity: this.fg.controls['turbidity'].value,
      temp: this.fg.controls['temp'].value,
      color: this.fg.controls['color'].value,
      tds: this.fg.controls['tds'].value,
      electCond: this.fg.controls['electCond'].value,
      pH: this.fg.controls['pH'].value,
      chloride: this.fg.controls['chloride'].value,
      fluoride: this.fg.controls['fluoride'].value,
      hardness: this.fg.controls['hardness'].value,
      dissolvedo2: this.fg.controls['dissolvedo2'].value
    }

    let submittedPVisit: IPlantVisit = this.plantVisit.postPlantVisit(obj);
    
    // switch(this.fg.controls['role'].value){
    //   case 'Admin':
    //     this.handleAdminLogIn()
    //     break;
    //   case 'Company':
    //     this.handleCompanyLogIn();
    //     break
    //   case 'Superior':
    //     this.handleSuperiorLogIn();
    //     break
    //   case 'Supervisor':
    //     this.handleSupervisorLogIn();
    //     break
    // }
  }


}
