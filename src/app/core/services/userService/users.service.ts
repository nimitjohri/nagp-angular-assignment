import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiurl = 'api/users';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiurl);
  }

}
