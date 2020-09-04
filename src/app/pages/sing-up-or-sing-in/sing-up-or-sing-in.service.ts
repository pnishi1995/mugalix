
import { Injectable } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';





@Injectable()
export class SingUpOrSingInService{
constructor(public _dataService:DataService){

}
postUserDetails(url,data){
return this._dataService.post(url,data)
}
}