import { Component, OnInit } from '@angular/core';
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
  productList: any;
  productListCopy: any;

  constructor(
    private _commonPipe: CommonPipe,
    public _routes: ActivatedRoute,
    private _commonService: CommonService,
    public _subCategoriesService: SubCategoriesService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getProductList();
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
    console.log(event.target.checked);
    const index = this.selectedBrands.indexOf(brand);
    console.log(index);

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
    console.log(this.selectedBrands);
  }

  findUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  page: number = 1;
  limit: number = 75;
  getProductList() {
    let param = '';
    param += this._routes.params['value'].categoryId
      ? '?category=' + this._routes.params['value'].categoryId
      : '';
    param += this._routes.params['value'].subcategoryId
      ? '&sub_category=' + this._routes.params['value'].subcategoryId
      : '';

    param += '&page=' + this.page + '&limit=' + this.limit;

    this._subCategoriesService.getProductList(param).subscribe((res) => {
      if (res['status']) {
        this.productList = res['data']['results'];
        this.productListCopy = res['data']['results'];
        this.getBrands(res['data']['results']);
      }
    });
  }
}
