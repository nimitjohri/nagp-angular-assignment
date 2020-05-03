import { Injectable } from '@angular/core';
import { UsersService } from '../userService/users.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  authorizeUsers: IUser[];
  constructor(userService: UsersService) {
    userService.getUsers().subscribe(data => {
      this.authorizeUsers = data;
    });
  }

  validateUser(user: IUser): boolean {
    let validUser = false;
    console.log('User', user);
    console.log('authorize users', this.authorizeUsers);
    if ((this.authorizeUsers.findIndex(dataUser => user.username.toLowerCase() === dataUser.username.toLowerCase()) !== -1 )
     && (this.authorizeUsers.findIndex(dataUser => user.password.toLowerCase() === dataUser.password.toLowerCase()) !== -1)) {
      validUser = true;
    }

    return validUser;
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('TOKEN');
}
}
