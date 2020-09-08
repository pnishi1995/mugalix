import { Injectable } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { CommonService } from 'src/app/shared/services/common.service';

@Injectable()

export class SubCategoriesService{


  constructor(private _dataService:DataService,public _commonService:CommonService){}

  getProductList(param) {
        return this._dataService.get(this._commonService.commonUrl+ '/product/list' + param) ;
  }
}
