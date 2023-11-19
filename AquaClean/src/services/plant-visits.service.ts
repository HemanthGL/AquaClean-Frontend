import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { IPlantVisit } from 'src/interfaces/IPlantVisit';

@Injectable({
  providedIn: 'root'
})
export class PlantVisitsService {

  constructor(private http: HttpClient) { }

  postPlantVisit(data: IPlantVisit):string{
    let visitObj: string = "test";
    this.http.post('https://aquaclean-backend-production.up.railway.app/plantVisit/', data)
            .pipe(
              catchError((err: HttpErrorResponse) => {
                if (err.status == 404){
                  // handle for case DB not found
                }

                return of({message: err.message})
              })
            )
            .subscribe((data : any) => {
              visitObj = data.plantVisitId;
            });
     return visitObj;
  }

  handleError(methodName: string, data: IPlantVisit){
    console.log('error occurred at ' + methodName + " while inserting plantVisitID" + data.plantVisitId);
  }

}
