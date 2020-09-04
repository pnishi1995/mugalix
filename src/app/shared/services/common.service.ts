import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  cart: Array<any>;
  user;
  token;

  constructor(private toastr: ToastrService, private _router: Router) {
    this.cart = JSON.parse(localStorage.getItem('addedProduct')) || [];
    this.updateToken();
  }
  getNumberofProductsAddedToCart(namesOfProducts) {
    this.cart = namesOfProducts;
  }

  showSuccessToast(data, msg) {
    this.toastr.success(data, msg);
  }

  updateToken() {
    this.token = localStorage.getItem('token');
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.token);
    console.log(this.user);
  }

  clearStorage() {
    this.token = '';
    this.user = '';
    localStorage.clear();
    this._router.navigateByUrl('/singin');
  }

  showErrorToast(data, msg) {
    this.toastr.error(data, msg);
  }
}
