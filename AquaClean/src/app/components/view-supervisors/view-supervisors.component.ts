import { Component } from '@angular/core';
import { IOnboardSupervisor } from 'src/interfaces/IOnboardSupervisor';
import { AuthService } from 'src/services/auth.service';
import { ViewsService } from 'src/services/views.service';

@Component({
  selector: 'app-view-supervisors',
  templateUrl: './view-supervisors.component.html',
  styleUrls: ['./view-supervisors.component.scss']
})
export class ViewSupervisorsComponent {

  
  constructor(private authServe: AuthService, private viewServe: ViewsService){}

  supervisors!: Array<IOnboardSupervisor>;


  ngOnInit(){
    // this.getData();

    try{
      if (localStorage.getItem('companycred'))
        this.authServe.userLogIn.companycred = localStorage.getItem('companycred')!
      console.log(this.authServe.userLogIn.cred + " is called here " + this.authServe.userLogIn.companycred)
      this.viewServe.getSupervisorData(this.authServe.userLogIn.cred, this.authServe.userLogIn.companycred).subscribe((data: any) => {
        // console.log(data)
        this.supervisors = data.supervisors;
        
        console.log(this.supervisors)
      })

    } catch(e){
      console.log('inside catch')
      console.log(e)
    }

  }

}
