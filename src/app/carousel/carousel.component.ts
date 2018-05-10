import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  items: Array<any> = []
  
  constructor (){
    this.items = [
      { name: 'assets/images/comp2.jpg' },
      { name: 'assets/images/washington.jpg' },
      { name: 'assets/images/ad2.jpg' },
    ]
  }

  ngOnInit() {
  }

}
