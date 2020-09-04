import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  itemsInCart:Array<any>;
  arrayOftotalforEachproduct=[];
  totalamount;
  constructor(public _commonService:CommonService) {}

  ngOnInit(): void {
    this.ItemAddedToCart()

  }


  ItemAddedToCart(){
    this.itemsInCart = this._commonService.cart;
    localStorage.setItem('addedProduct', JSON.stringify(this.itemsInCart));
    this.getTotalPayable();
  }

  udpateCartItemQuantity(index: number, type: string) {
    if(type === 'add'&& this.itemsInCart[index].numberOfItemNeededByUser!== this.itemsInCart[index].quantity){
      this.itemsInCart[index].numberOfItemNeededByUser += 1;
      this.itemsInCart[index].productTotal += this.itemsInCart[index].price;
    }else if(type === 'sub'&& this.itemsInCart[index].numberOfItemNeededByUser!== 1){
      this.itemsInCart[index].numberOfItemNeededByUser -= 1;
      this.itemsInCart[index].productTotal -= this.itemsInCart[index].price;
    }
    localStorage.setItem('addedProduct', JSON.stringify(this.itemsInCart));
    this.getTotalPayable();
  } 
  
  getTotalPayable(){
    this.totalamount = 0;
    for(let index=0, length= this.itemsInCart.length; index< length; ++index){
      this.totalamount = this.totalamount + this.itemsInCart[index].productTotal;
    }
    localStorage.setItem('addedProduct', JSON.stringify(this.itemsInCart));
  }

  removeItem(i){
    this.itemsInCart.splice(i,1);
    this.getTotalPayable()
    localStorage.setItem('addedProduct', JSON.stringify(this.itemsInCart));
  }
  
  
}


