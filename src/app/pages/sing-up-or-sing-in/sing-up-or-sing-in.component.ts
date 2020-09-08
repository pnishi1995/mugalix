import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SingUpOrSingInService } from './sing-up-or-sing-in.service';
import { Router } from '@angular/router';
import { CommonService } from '../../shared/services/common.service';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-sing-up-or-sing-in',
  templateUrl: './sing-up-or-sing-in.component.html',
  styleUrls: ['./sing-up-or-sing-in.component.scss'],
})
export class SingUpOrSingInComponent implements OnInit {
  loginForm: FormGroup;
  logInDataRecieved: any;
  singUpForm: FormGroup;
  singUpDataRecieved: any;
  showPopup: boolean = true;
  showBox: boolean = false;
  hideBox: boolean = false;
  
  constructor(
    public _singUpOrSingInService: SingUpOrSingInService,
    private _router: Router,
    private _commonService: CommonService,
    private _dataService: DataService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
    this.singUpForm = new FormGroup({
      f_name: new FormControl(),
      l_name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      role: new FormControl(),
    });
  }
  logIn() {
    this._singUpOrSingInService
      .postUserDetails(this._commonService.commonUrl + '/login', this.loginForm.value)
      .subscribe(
        (res) => {
          if (res['status']) {
            this.setAndUpdateToken(res);
            this._dataService.get(this._commonService.commonUrl +'/cart/get').subscribe((res)=>{
            this._commonService.getNumberofProductsAddedToCart(res['cart']['items'])})
          } else {
            this._commonService.showErrorToast('Something went wrong', 'Error');
          }
        },
        (err) => {
          this._commonService.showErrorToast(err.error.error, 'Error');
        }
      );

      

    console.log(this.loginForm.value);
  }

  setAndUpdateToken(res) {
    localStorage.setItem('token', res['data']['token']);
    localStorage.setItem('user', JSON.stringify(res['data']['user']));
    this._commonService.updateToken();
    this._dataService.setHttpHeaders();
    this._router.navigateByUrl('/home');
  }

  singUp() {
    this._singUpOrSingInService
      .postUserDetails(this._commonService.commonUrl + '/sign-up', this.singUpForm.value)
      .subscribe((res) => {
      console.log(res);
        if (res['status']) {
            this.setAndUpdateToken(res);
            this._commonService.showSuccessToast('Successfully LoggedIn','Done')
            this._commonService.cart= res['data']['cart']['items']
            localStorage.setItem('updatedCart',JSON.stringify(res['data']['cart']['items']))
            this._commonService.updateMyCart()
          } else {
            this._commonService.showErrorToast('Something went wrong', 'Error');
          }
      },
      (err) => {
          this._commonService.showErrorToast('Enter your credentials correctly', 'Error');
        }
      );
  }
  //err.error.error
  showSingUpForm() {
    this.showBox = true;
    this.hideBox = true;
  }
  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this._router.navigateByUrl('/home');
    }
  }
}
