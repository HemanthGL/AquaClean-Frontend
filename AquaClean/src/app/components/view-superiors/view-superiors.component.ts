import { Component } from '@angular/core';
import { IOnboardSuperior } from 'src/interfaces/IOnboardSuperior';
import { AuthService } from 'src/services/auth.service';
import { ViewsService } from 'src/services/views.service';

@Component({
  selector: 'app-view-superiors',
  templateUrl: './view-superiors.component.html',
  styleUrls: ['./view-superiors.component.scss']
})
export class ViewSuperiorsComponent {

  constructor(private authServe: AuthService, private viewServe: ViewsService){}

  superiors!: Array<IOnboardSuperior>;

  // getData(){
  //   try{
  //     console.log(this.authServe.userLogIn.cred + " is called")
  //     this.viewServe.getSuperiorData(this.authServe.userLogIn.cred).subscribe((data: any) => {
  //       this.superiors = data;
  
  //       console.log(this.superiors)
  //     })

  //   } catch(e){
  //     console.log('inside catch')
  //     console.log(e)
  //   }
  // }

  ngOnInit(){
    // this.getData();

    try{
      console.log(this.authServe.userLogIn.cred + " is called")
      this.viewServe.getSuperiorData(this.authServe.userLogIn.cred).subscribe((data: any) => {
        this.superiors = data.superiors;
        
        console.log(this.superiors)
      })

    } catch(e){
      console.log('inside catch')
      console.log(e)
    }

  }
}
