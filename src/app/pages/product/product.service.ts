
import { Injectable } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Injectable()

export class ProductService{

  constructor(private _dataService:DataService){}

  getProduct(url){
    return this._dataService.get(url)
  }

  
  
}