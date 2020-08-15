import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carouselHolder.component.html'
})
export class CarouselHolderComponent {
    customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
        0: {
        items: 1
        },
        400: {
        items: 2
        },
        740: {
        items: 3
        },
        940: {
        items: 4
        }
    },
    nav: true
    }
}