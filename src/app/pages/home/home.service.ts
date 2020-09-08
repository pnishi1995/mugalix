import { Injectable } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { CommonService } from 'src/app/shared/services/common.service';

@Injectable()
export class HomeService {
  constructor(
    private _dataService: DataService,
    public _commonService: CommonService
  ) {}

  getCategoryProducts() {
    return this._dataService.get(
      this._commonService.commonUrl + '/home/get-product-list'
    );
  }
  getCategorylist() {
    return this._dataService.get(
      this._commonService.commonUrl + '/category/list'
    );
  }
}
