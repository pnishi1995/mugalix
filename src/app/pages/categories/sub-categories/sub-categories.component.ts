import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubCategoriesService } from "./sub-categories.service";
@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent implements OnInit {
  productList:any;

  constructor(public _routes:ActivatedRoute, 
  public _subCategoriesService:SubCategoriesService) { 
  
  }


  ngOnInit(): void {
    this.getProductListAbhi();
  }

  getProductListAbhi(){
    let param = '';
    param += this._routes.params['value'].categoryId ? '?category=' + this._routes.params['value'].categoryId : '';
    param += this._routes.params['value'].subcategoryId ? '&sub_category=' + this._routes.params['value'].subcategoryId : '';

    this._subCategoriesService.getProductList(param).subscribe(res => {
      if (res['status']) {
        this.productList = res['data'];
      }
    });
  }
}
