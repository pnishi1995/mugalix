import { Injectable } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';


const URL = "http://192.168.0.110:4242/api/moglix/";

@Injectable()

export class SubCategoriesService{


  constructor(private _dataService:DataService){}

  getProductList(param) {
        return this._dataService.get(URL + 'product/list' + param);
  }
}
