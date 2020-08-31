import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubCategoriesService } from './sub-categories.service';
import { element } from 'protractor';
@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss'],
})
export class SubCategoriesComponent implements OnInit {
  productList: any;
  productListCopy: any;

  constructor(
    public _routes: ActivatedRoute,
    public _subCategoriesService: SubCategoriesService
  ) {}

  ngOnInit(): void {
    this.getProductList();
  }

  selectedBrand: string = '';
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

  updateProductList() {
    this.productList = this.productListCopy.filter((product) => {
      if (product.brand === this.selectedBrand) {
        return product;
      }
    });
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
