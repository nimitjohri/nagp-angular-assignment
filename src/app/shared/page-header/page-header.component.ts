import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/core/services/loginService/login.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {


  isLoggedIn$: Observable<boolean>;
  isLoggedIn = false;

  username = '';
  pageTitle = 'Covid 19 India';

  constructor(private router: Router, private loginService: LoginService) {
    this.isLoggedIn$ = this.loginService.isLoggedIn();

  }

  ngOnInit(): void {
    if (localStorage.getItem('TOKEN') !== null) {
      this.username = localStorage.getItem('username');
      this.isLoggedIn = true;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
