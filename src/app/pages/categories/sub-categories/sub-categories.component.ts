import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubCategoriesService } from './sub-categories.service';
import { CommonPipe } from '../../../shared/pipes/common.pipe';
import { CommonService } from './../../../shared/services/common.service';



@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss'],
})
export class SubCategoriesComponent implements OnInit {

  @Input() id: string;
  @Input() maxSize: number;
  @Output() pageChange: EventEmitter<number>;
  @Output() pageBoundsCorrection: EventEmitter<number>;

  productList: any;
  productListCopy: any;
  disable:boolean=false;
  constructor(
    private _commonPipe: CommonPipe,
    public _routes: ActivatedRoute,
    private _commonService: CommonService,
    public _subCategoriesService: SubCategoriesService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.getProductList(0);
  }
  selectedBrand: string = '';
  selectedBrands: Array<string> = [];
  brands: Array<string> = [];
  getBrands(data) {
    const bucket = [...data];
    this.brands = bucket
      .map((item) => {
        return item.brand;
      })
      .filter(this.findUnique);
      // this.selectedBrand = this.brands[0];
  }

  updateProductList(event, brand) {
    const index = this.selectedBrands.indexOf(brand);

    // index > -1 matlab already hai brand

    if (event.target.checked && index < 0) {
      //push
      this.selectedBrands.push(brand);
    } else if (index > -1) {
      // hataogi
      this.selectedBrands.splice(index, 1);
    }
    this.productList = this._commonPipe.transform(
      this.productListCopy,
      this.selectedBrands
    );
  }

  findUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  
  limit: number = 15;
  pageCount:number;
  pageArray:Array<boolean>;
  count;
  next;
  currentPage;
  getProductList(i) {
    
    this._commonService.showLoader();
    let param = '';
    let page;
    if(this.pageArray){
    page  = i+1
    }else{
    page = 1
    }
    this.currentPage=page;
    param += this._routes.params['value'].categoryId
      ? '?category=' + this._routes.params['value'].categoryId
      : '';
    param += this._routes.params['value'].subcategoryId
      ? '&sub_category=' + this._routes.params['value'].subcategoryId
      : '';

    param += '&page=' + page + '&limit=' + this.limit;

    this._subCategoriesService.getProductList(param).subscribe((res) => {
      if (res['status']) {
        this.productList = res['data']['results'];
        this.productListCopy = res['data']['results'];
        this.getBrands(res['data']['results']);
        this.count= res['data']['count'],
        this.next=res['data']['next'] || 1,
        this.pageCount = Math.round(this.count/this.limit)
        this.pageArray = new Array (this.pageCount).fill(false);
        this.pageArray[i]= true;
      }
      
      this._commonService.hideLoader();
    });
  }

  showClickedPageNo(i){
  this.pageArray[i]=true;
  this.getProductList(i);
  }
}
