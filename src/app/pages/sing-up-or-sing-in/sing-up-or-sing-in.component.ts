import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SingUpOrSingInService } from './sing-up-or-sing-in.service';
@Component({
  selector: 'app-sing-up-or-sing-in',
  templateUrl: './sing-up-or-sing-in.component.html',
  styleUrls: ['./sing-up-or-sing-in.component.scss']
})
export class SingUpOrSingInComponent implements OnInit {
  loginForm:FormGroup;
  logInDataRecieved:any;
  singUpForm:FormGroup;
  singUpDataRecieved:any;
  showPopup: boolean = false;
  showBox:boolean = false;
  hideBox:boolean = false;
  check:string="ghbytredfhuytrff"
  commonUrl: string = "http://192.168.0.110:4242/api/moglix"
  constructor(public _singUpOrSingInService:SingUpOrSingInService) { 

    this.loginForm = new FormGroup({
    email : new FormControl,
    password:new FormControl
    })
    this.singUpForm = new FormGroup({
      
      f_name: new FormControl,
      l_name:new FormControl,
      email:new FormControl,
      password:new FormControl,
      role:new FormControl
    
    })
    setTimeout(() => {
    this.showPopup = true;
    }, 2000);
  }
  logIn(){
    this._singUpOrSingInService.postUserDetails(this.commonUrl+'/login' , this.loginForm.value).subscribe((res)=>{
    this.logInDataRecieved= res
    console.log(this.logInDataRecieved)});
    
    console.log(this.loginForm.value);
  }
  singUp(){
    this._singUpOrSingInService.postUserDetails(this.commonUrl+'/sign-up', this.singUpForm.value).subscribe((res)=>{
    this.singUpDataRecieved = res;
      console.log(res,this.singUpDataRecieved);
    });
  }
  showSingUpForm(){
    this.showBox = true;
    this.hideBox = true;
  }
  ngOnInit(): void {
  }

}



