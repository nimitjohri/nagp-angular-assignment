import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CovidDistrictDataService {

  apiUrl = 'https://api.covid19india.org/state_district_wise.json';

  constructor(private http: HttpClient) { }

  getCovidDistrictData(){
    return this.http.get(`${this.apiUrl}`);
  }
}
