import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  updatedCartValue;
  totalPrice;
  constructor(public _commonService:CommonService,public _dataService:DataService) {}

  ngOnInit(): void {
  this.cartRecentUpdate();
  }


  udpateCartItemQuantity(index: number, type: string) {
    if(type === 'add'){
      this._commonService.cart[index].quantity += 1;

    }else if(type === 'sub'&& this._commonService.cart[index].quantity!== 1){
      this._commonService.cart[index].quantity -= 1;
    }
    this.cartRecentUpdate();
  } 


  removeItem(i){
    this._commonService.cart.splice(i,1);
    this.cartRecentUpdate();
  }

  cartRecentUpdate(){
    this._commonService.showLoader();
    this._dataService.post(this._commonService.commonUrl +'/cart/update',
    {items:this._commonService.cart}).subscribe((res)=>{
    this.totalPrice = res['cart']['totalPrice'];  
    this.updatedCartValue = res['cart']['items'];
    localStorage.setItem('updatedCart',JSON.stringify(res['cart']['items']));
    this._commonService.updateMyCart();
    this._commonService.hideLoader();
    })
  }
  
}
