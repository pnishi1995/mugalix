import { Component, ViewChild, TemplateRef } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { HomeService } from './home.service';
import { newArray } from '@angular/compiler/src/util';
import { Observable, forkJoin } from 'rxjs';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  config: any = {
    api: 'https://jsonplaceholder.typicode.com',
    tableConfig: {
      limit: 5,
    },
    styleConfig: {
      theme: {
        background: '#3e3c89',
      },
    },
  };
  @ViewChild('homeCrowsel', { static: true }) homeCrowsel;
  moglixHomePageData: any;
  categories: Array<any>;
  advertisers: Array<any>;
  flayersImages: Array<any>;
  dataForActiveCarousel = this.flayersImages;
  activeSlidesCaption: Array<Boolean>;
  categorieslistData: any;
  categoriesRawlist: any;

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

  constructor(
    private _homeService: HomeService,
    private _commonService: CommonService
  ) {
    this.activeSlidesCaption = newArray(5).fill(false);
  }

  ngOnInit() {
    this.getHomePageData();
  }

  getHomePageData() {
    this._commonService.showLoader();
    const combined = forkJoin(
      this._homeService.getCategorylist(),
      this._homeService.getCategoryProducts()
    );

    combined.subscribe((latestValues) => {
      const [res, data] = latestValues;
      this.categoriesRawlist = res['data'];

      this.moglixHomePageData = data;
      this.categories = this.moglixHomePageData.data.category_data;
      this.advertisers = this.moglixHomePageData.data.banner_data.advertisement;
      this.flayersImages = this.moglixHomePageData.data.banner_data.flyer;
      this._commonService.hideLoader();
    });
  }

  getCategoryProducts() {
    this._homeService.getCategorylist().subscribe((res) => {
      this.categorieslistData = res;
      this.categoriesRawlist = this.categorieslistData.data;
    });
  }

  getCategoryData() {
    this._homeService.getCategoryProducts().subscribe((res) => {
      this.moglixHomePageData = res;
      this.categories = this.moglixHomePageData.data.category_data;
      this.advertisers = this.moglixHomePageData.data.banner_data.advertisement;
      this.flayersImages = this.moglixHomePageData.data.banner_data.flyer;
    });
  }

  goToSlide(index) {
    this.homeCrowsel.to('' + index);
  }

  activeSlides: SlidesOutputData;
  getData(dataForActiveCarousel: SlidesOutputData) {
    this.activeSlides = dataForActiveCarousel;

    setTimeout(() => {
      this.activeSlidesCaption = newArray(5).fill(false);
      this.activeSlidesCaption[dataForActiveCarousel.startPosition] = true;
    }, 0);
  }
}
