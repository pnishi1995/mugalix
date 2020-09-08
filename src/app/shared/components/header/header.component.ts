import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  color;
  constructor(public _commonService: CommonService,public _dataService:DataService) {
    this.getProfileColor();
  }

  getProfileColor() {
    const alpha = Math.floor(Math.random() * 255) + 1;
    const beta = Math.floor(Math.random() * 255) + 1;
    const gama = Math.floor(Math.random() * 255) + 1;
    this.color = 'rgb(' + alpha + ',' + beta + ',' + gama + ')';
    console.clear();
  }
  logout(){
  this._dataService.post(this._commonService.commonUrl+'/logout','').subscribe((res)=>{
      console.log(res)
      if(res['status']){
      this._commonService.clearStorage()
      this._commonService.showSuccessToast('Successfully logged out','Done')
      }else{
      console.log('something went wrong')
      this._commonService.showErrorToast('Something went wrong','Error')}})
  }
}
