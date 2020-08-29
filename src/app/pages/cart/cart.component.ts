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
  NoOfFinalItemByuser;
  constructor(public _commonService:CommonService) {}

  ngOnInit(): void {
    this.ItemAddedToCart()

  }


  ItemAddedToCart(){
    this.itemsInCart = this._commonService.cart;
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

    this.getTotalPayable();
  } 
  
  getTotalPayable(){
    this.totalamount = 0;
    for(let index=0, length= this.itemsInCart.length; index< length; ++index){
      this.totalamount = this.totalamount + this.itemsInCart[index].productTotal;
    }
  }

  removeItem(i){
    this.itemsInCart.splice(i,1);
    this.getTotalPayable()
  }
  
}
