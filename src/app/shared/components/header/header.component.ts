
import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.scss']
})

export class HeaderComponent{
  
  constructor(public _commonService:CommonService){
  }
}