import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  constructor(private http: HttpClient) { }

  getSuperiorData(companyId: string){
    console.log('called')
    return this.http.get('https://aquaclean-backend-production.up.railway.app/v1/company/' + companyId);
  }

  getSupervisorData(superiorId: string, companyId: string){
    console.log(' creds are : ' + superiorId + ' comp ' + companyId)
    return this.http.get('https://aquaclean-backend-production.up.railway.app/v1/company/' + companyId + "/superior/" + superiorId);
  }
}
