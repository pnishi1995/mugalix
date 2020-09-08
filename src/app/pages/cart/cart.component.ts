import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CommonService } from 'src/app/shared/services/common.service';
import { DataService } from 'src/app/shared/services/data.service';
=======
import { CommonService } from './../../shared/services/common.service';
>>>>>>> 36accf89c5d80043a69da668511ea3ab3b32d258

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
<<<<<<< HEAD
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
    this._dataService.post(this._commonService.commonUrl +'/cart/update',
    {items:this._commonService.cart}).subscribe((res)=>{
    this.totalPrice = res['cart']['totalPrice'];  
    this.updatedCartValue = res['cart']['items'];
    localStorage.setItem('updatedCart',JSON.stringify(res['cart']['items']));
    this._commonService.updateMyCart();
    })
  }
  
=======
  itemsInCart: Array<any>;
  arrayOftotalforEachproduct = [];
  totalamount;
  constructor(public _commonService: CommonService) {}

  ngOnInit(): void {
    this.ItemAddedToCart();
  }

  ItemAddedToCart() {
    this.itemsInCart = this._commonService.cart;
    localStorage.setItem('addedProduct', JSON.stringify(this.itemsInCart));
  }

  udpateCartItemQuantity(index: number, type: string) {
    if (
      type === 'add' &&
      this.itemsInCart[index].numberOfItemNeededByUser !==
        this.itemsInCart[index].quantity
    ) {
      this.itemsInCart[index].numberOfItemNeededByUser += 1;
      this.itemsInCart[index].productTotal += this.itemsInCart[index].price;
      this.totalamount += this.itemsInCart[index].price;
    } else if (
      type === 'sub' &&
      this.itemsInCart[index].numberOfItemNeededByUser !== 1
    ) {
      this.itemsInCart[index].numberOfItemNeededByUser -= 1;
      this.itemsInCart[index].productTotal -= this.itemsInCart[index].price;
      this.totalamount -= this.itemsInCart[index].price;
    }
    localStorage.setItem('addedProduct', JSON.stringify(this.itemsInCart));
  }

  removeItem(i) {
    this.itemsInCart.splice(i, 1);
    localStorage.setItem('addedProduct', JSON.stringify(this.itemsInCart));
  }
>>>>>>> 36accf89c5d80043a69da668511ea3ab3b32d258
}
