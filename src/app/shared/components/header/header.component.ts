import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  color;
  constructor(public _commonService: CommonService) {
    this.getProfileColor();
  }

  getProfileColor() {
    const alpha = Math.floor(Math.random() * 255) + 1;
    const beta = Math.floor(Math.random() * 255) + 1;
    const gama = Math.floor(Math.random() * 255) + 1;
    this.color = 'rgb(' + alpha + ',' + beta + ',' + gama + ')';
    console.clear();
    console.log(this.color);
  }
}
