import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthService } from 'src/services/auth.service';
import { IUser } from 'src/interfaces/IUser';
import { ISuperior } from 'src/interfaces/ISuperior';
import { ISupervisor } from 'src/interfaces/ISupervisor';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})

export class LoginformComponent {

  constructor(private fb: FormBuilder, private authServe : AuthService){}
  isAdmin: boolean = false;
  isCompany: boolean = false;
  isSuperior: boolean = false;
  isSupervisor: boolean = false;

  fg! : FormGroup

  ngOnInit(){
    this.fg = this.fb.group({
      role: ['', [
        Validators.required
      ]],
      adminId: ['', [
        // Validators.minLength(4),
        // Validators.maxLength(15)
      ]],
      companyId: ['', [
        // Validators.minLength(4),
        // Validators.maxLength(15)
      ]],
      superiorId: ['', [
        // Validators.minLength(4),
        // Validators.maxLength(15)
      ]],
      supervisorId: ['', [
        // Validators.minLength(4),
        // Validators.maxLength(15)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(4)
      ]]
    })

    this.fg.controls['role'].valueChanges.subscribe(value => {
      this.isAdmin = false;
      this.isCompany = false;
      this.isSuperior = false;
      this.isSupervisor = false;

      switch(value){
        case 'Admin':
          this.isAdmin = true;
          break
        case 'Company':
          this.isCompany = true;
          break
        case 'Superior':
          this.isSuperior = true;
          break 
        case 'Supervisor':
          this.isSupervisor = true;
          break
      }
    })
  }

  // foods: Food[] = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'},
  // ];


  

  /**
   * 
   * @param event Mouse click event on Submit button
   * @description redirects to users page on succesfuly submission of Form
   */
  onSubmit(event: MouseEvent){
    
    switch(this.fg.controls['role'].value){
      case 'Admin':
        this.handleAdminLogIn()
        break;
      case 'Company':
        this.handleCompanyLogIn();
        break
      case 'Superior':
        this.handleSuperiorLogIn();
        break
      case 'Supervisor':
        this.handleSupervisorLogIn();
        break
    }
    

    // if (this.auth.isLogIn){
    //   alert('Already logged In..')
    // } else {

    //   let uName: string = this.fg.get('userName')!.value
    //   let pwd: string = this.fg.get('password')!.value

    //   if (this.auth.logInAttempt(uName, pwd)){
    //     this.router.navigate(['/'])
    //   }
    // }




  }

  handleCompanyLogIn(){
    let company: IUser | null = this.authServe.companyLogInAttempt(this.fg.controls['companyId'].value, this.fg.controls['password'].value)

    if (company){
      this.authServe.setLogInFalse();
      this.authServe.userLogIn.isCompany = true;
      console.log('company logIn set to true;')
      // reroute to company dashboard
        // with <Add Superior Btn>, <Superiors Performance Cards>
    }
  }
  
  handleAdminLogIn(){
    let adminLogIn: boolean= this.authServe.adminLogInAttempt(this.fg.controls['adminId'].value, this.fg.controls['password'].value);

    console.log('calling admin login')

    if (adminLogIn){
      console.log('setting status var')
      this.authServe.setLogInFalse();
      this.authServe.setLogInTrue()
      this.authServe.userLogIn.isAdmin = true;
    }
  }

  handleSuperiorLogIn(){
    let superior: ISuperior | null = this.authServe.superiorLogInAttempt(this.fg.controls['companyId'].value, this.fg.controls['superiorId'].value, this.fg.controls['password'].value)

    if (superior){
      superior.companyId = this.fg.controls['companyId'].value
      // reroute to company dashboard
        // with <Add Superior Btn>, <Superiors Performance Cards>
    }
  }

  handleSupervisorLogIn(){
    let supervisor : ISupervisor | null = this.authServe.supervisorLogInAttempt(this.fg.controls['companyId'].value, this.fg.controls['superiorId'].value, this.fg.controls['supervisorId'].value, this.fg.controls['password'].value)

    if (supervisor){
      
      // reroute to company dashboard
        // with <Add Superior Btn>, <Superiors Performance Cards>
    }
  }

}
