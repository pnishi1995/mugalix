import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  showloader:boolean = false;
  constructor() { }

  ngOnInit(): void {

    setTimeout(()=>{
      this.showloader = true;
      console.log('done');
    },1500)
  }
  
}
