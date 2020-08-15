import { Component, ViewChild, TemplateRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from './home.service';


@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.scss']
})

export class  HomeComponent{
    @ViewChild('sdsd', {static: true}) sdsd: TemplateRef;
    moglixHomePageData: any;
    categories:Array<any>;
    advertisers:Array<any>;
    flayersImages:Array<any>;
    
    
customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    responsive: {
        0: {
        items: 1
        },
        400: {
        items: 1
        },
        740: {
        items: 1
        },
        940: {
        items: 1
        }
    },
    nav: true,
    navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ]
    }



productSlideOption: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    responsive: {
        0: {
        items: 1
        },
        400: {
        items: 1
        },
        740: {
        items: 6
        },
        940: {
        items: 6
        }
    },
    nav: true,
    navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ]
    }

    constructor(private _homeService: HomeService) {
        
    }
    

    ngOnInit() {
        const data = {
            "category_list": [
            "5f279f68e51fa82349684923",
            "5f279f6ce51fa82349684924",
            "5f279f7fe51fa82349684925",
            "5f279f8de51fa82349684926",
            "5f279f9fe51fa82349684927",
            "5f279fa4e51fa82349684928",
            "5f297538c25c696b14ef3019",
            "5f297373c25c696b14ef3015"
            ]};
        this._homeService.getCategoryProducts(data).subscribe(res => {
            
            this.moglixHomePageData=res;
            console.log(this.moglixHomePageData);
            this.categories = this.moglixHomePageData.data.category_data;
            console.log(this.categories );
            this.advertisers = this.moglixHomePageData.data.banner_data.advertisement;
            this.flayersImages = this.moglixHomePageData.data.banner_data.flyer;
        });
    }
    
    
}``