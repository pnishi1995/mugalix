import { Component, ViewChild, TemplateRef } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { HomeService } from './home.service';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('homeCrowsel', { static: true }) homeCrowsel;
  moglixHomePageData: any;
  categories: Array<any>;
  advertisers: Array<any>;
  flayersImages: Array<any>;
  dataForActiveCarousel = this.flayersImages;
  activeSlidesCaption: Array<Boolean>;
  categorieslistData:any;
  categoriesRawlist:any;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
    navText: [
      '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
    ],
  };

  productSlideOption: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    stagePadding: 0,
    navSpeed: 700,
    margin: 0,
    autoHeight: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 6,
      },
      940: {
        items: 6,
      },
    },
    nav: true,
    navText: [
      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
    ],
  };

  constructor(private _homeService: HomeService) {
    this.activeSlidesCaption = newArray(5).fill(false);
  }

  ngOnInit() {
    const data = {
      category_list: [
        '5f279f68e51fa82349684923',
        '5f279f6ce51fa82349684924',
        '5f279f7fe51fa82349684925',
        '5f279f8de51fa82349684926',
        '5f279f9fe51fa82349684927',
        '5f279fa4e51fa82349684928',
        '5f297538c25c696b14ef3019',
        '5f297373c25c696b14ef3015',
      ],
    };
    this._homeService.getCategoryProducts(data).subscribe((res) => {
      this.moglixHomePageData = res;
      console.log(this.moglixHomePageData);
      this.categories = this.moglixHomePageData.data.category_data;
      console.log(this.categories);
      this.advertisers = this.moglixHomePageData.data.banner_data.advertisement;
      this.flayersImages = this.moglixHomePageData.data.banner_data.flyer;
    });

    this._homeService.getCategorylist(data).subscribe((res)=>{
      this.categorieslistData = res;
      console.log(this.categorieslistData.data);
      this.categoriesRawlist = this.categorieslistData.data  ;
      
    })
  }

  goToSlide(index) {
    this.homeCrowsel.to('' + index);
    console.log(this.homeCrowsel);
  }

  activeSlides: SlidesOutputData;
  getData(dataForActiveCarousel: SlidesOutputData) {
    this.activeSlides = dataForActiveCarousel;
    console.log(this.activeSlides);
    setTimeout(() => {
      this.activeSlidesCaption = newArray(5).fill(false);
      this.activeSlidesCaption[dataForActiveCarousel.startPosition] = true;
    }, 0);
  }
}
