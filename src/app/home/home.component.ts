import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects: Array<any>;

  constructor() {}

  ngOnInit() {
    // placeholder for project data
    this.projects = [
      { data: '1' },
      { data: '2' },
      { data: '3' },
      { data: '4' },
      { data: '5' }
    ];
  }
}
