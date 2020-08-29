import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CommonService{
  
  cart:Array<any>;
  constructor(){
    this.cart = JSON.parse(localStorage.getItem('addedProduct')) || [];      
  }
  getNumberofProductsAddedToCart(namesOfProducts){
    this.cart = namesOfProducts;
  }
  
}