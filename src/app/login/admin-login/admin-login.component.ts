import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/loginService/login.service';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/shared/interfaces/IUser';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService,
              private toastrService: ToastrService) {
                this.loginForm = this.formBuilder.group({
                  username: ['', Validators.required],
                  password: ['', Validators.required]
                });
               }
// getErrorMessage() {
//   return this.loginForm.get('username').hasError('required') ? 'You must enter a value' :
//       this.loginForm.get('password').hasError('required') ? 'You must enter a value' :
//           '';
// }

  /** Clears the local storage initially */
  ngOnInit() {
    if (localStorage.getItem('TOKEN')) {
      localStorage.clear();
    }
  }

  login(user: IUser) {
    if (this.loginService.validateUser(user)) {
      localStorage.setItem('TOKEN', 'token');
      localStorage.setItem('username', user.username);
      this.router.navigate(['/dashboard/addnews']);
      this.toastrService.success('Logged in successfully!', 'Covid19 India');
    } else {
      this.toastrService.warning('Please enter valid credentials!', 'Covid19 India');
    }
  }

  resetForm() {
    this.loginForm.reset();
  }
}
