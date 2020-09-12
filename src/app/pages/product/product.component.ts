import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productDetail:any;
  addOneMoreItem:number;
  totalAmount;
  updatedCart;
  newaddedItem :Array<any>;
  constructor(public _routes:ActivatedRoute,
  public _productService:ProductService,
  public _commonService:CommonService,
  public _dataService:DataService ) {
  this.addOneMoreItem=1;
  this.addOneMoreItem!==1? this.increaseQuantityOfItemForCart() : this.decreaseQuantityOfItemForCart();
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this._commonService.showLoader();
    this._productService.getProduct(this._commonService.commonUrl+'/product/id/'+ this._routes.params['value'].productId).subscribe((res)=>{
      this.productDetail= res['data'];
      this._commonService.hideLoader();
    })

  }

  increaseQuantityOfItemForCart(){
    if( this.addOneMoreItem !== this.productDetail.quantity)
    this.addOneMoreItem = this.addOneMoreItem +1  ;
  }

  decreaseQuantityOfItemForCart(){
    if(this.addOneMoreItem !==1){
    this.addOneMoreItem = this.addOneMoreItem -1 ;
    }
    
  }

  addToCart(){
    this._commonService.showLoader();
    const product = {
      productId:this.productDetail['id'],
      name:this.productDetail['name'],
      brand:this.productDetail['brand'],
      price:this.productDetail['price'],
      quantity:this.addOneMoreItem
    } 
    
    this._commonService.cart.push(product);
    this._dataService.post(this._commonService.commonUrl +'/cart/update',
    {items:this._commonService.cart}).subscribe((res)=>{
    localStorage.setItem('updatedCart',JSON.stringify(res['cart']['items']));
    this._commonService.updateMyCart();
    this._commonService.hideLoader();
    })
    
  }
  

}
