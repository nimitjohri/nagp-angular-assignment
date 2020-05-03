import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidStatesDataService {

  apiUrl = 'https://api.covid19india.org/data.json';

  constructor(private http: HttpClient) { }

  getCovidStatesData(){
    return this.http.get(`${this.apiUrl}`);
  }
}
