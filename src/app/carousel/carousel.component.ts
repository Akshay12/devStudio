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
      { name: 'assets/images/dy231.jpg' },
      { name: 'assets/images/sunrise.jpg' },
      { name: 'assets/images/rock.jpg' },
      { name: 'assets/images/digit2.0.2.jpg' },
    ]
  }

  ngOnInit() {
  }

}
