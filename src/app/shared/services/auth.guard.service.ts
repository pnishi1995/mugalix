import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private _commonService: CommonService) {}

  canActivate(route, state: RouterStateSnapshot) {
    if (localStorage.getItem('token') && localStorage.getItem('user')) {
      return true;
    }

    this._commonService.showErrorToast(
      'Please login to visit these pages',
      'Error!!!'
    );

    // not logged in so redirect to login page with the return url
    this.router.navigateByUrl('/home');
    return false;
  }
}
