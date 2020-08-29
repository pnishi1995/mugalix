import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productDetail:any;
  addOneMoreItem:number;
  addProductInCart:Array<any>;
  itemsInCart=[];
  constructor(public _routes:ActivatedRoute,
  public _productService:ProductService,
  public _commonService:CommonService) {
  console.log(this._routes.params);
  console.log(this._routes.params['value']);
  this.addOneMoreItem=1;
  this.addOneMoreItem!==1? this.increaseQuantityOfItemForCart() : this.decreaseQuantityOfItemForCart();
  }

  ngOnInit(): void {
    this.getProduct()

  }

  getProduct(){
    this._productService.getProduct('http://192.168.0.110:4242/api/moglix/product/id/'+ this._routes.params['value'].productId).subscribe((res)=>{
      this.productDetail = res['data'] 
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
    this.addProductInCart = JSON.parse(localStorage.getItem('addedProduct'));
    this.addProductInCart? this.addProductInCart:this.addProductInCart=[];
    this.addProductInCart.push(this.productDetail);
    this.productDetail.numberOfItemNeededByUser=this.addOneMoreItem;
    this.productDetail.productTotal= (this.productDetail.price * this.productDetail.numberOfItemNeededByUser);
    localStorage.setItem('addedProduct',JSON.stringify(this.addProductInCart)) ;
    this._commonService.getNumberofProductsAddedToCart(JSON.parse(localStorage.getItem('addedProduct')));
  }
}
