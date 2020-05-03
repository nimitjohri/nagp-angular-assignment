import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CanActivateAddNewsGuard implements CanActivate {
  constructor(private router: Router,
              private toastrService: ToastrService
    ) {}
  canActivate(): boolean {
    if (localStorage.getItem('TOKEN') === null || localStorage.getItem('TOKEN') === undefined) {
      this.router.navigate(['/login']);
      this.toastrService.warning('Please login to continue!', 'Add News');
      return false;
    }
    return true;
  }

}
