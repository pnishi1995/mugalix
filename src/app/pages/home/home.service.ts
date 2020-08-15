import { Injectable } from "@angular/core";
import { DataService } from '../../shared/services/data.service';

@Injectable()
export class HomeService {
    constructor(private _dataService: DataService){}

    getCategoryProducts(data) {
        return this._dataService.get('http://192.168.0.110:4242/api/moglix/home/get-product-list');
    }
}