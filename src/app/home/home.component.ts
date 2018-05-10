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
      { name: 'project1', expanded: false, text: 'project 1 was so cool'},
      { name: 'project2', expanded: false, text: 'project 2 was so cool'},
      { name: 'project3', expanded: false, text: 'project 3 was so cool'},
      { name: 'project4', expanded: false, text: 'project 4 was so cool'},
      { name: 'project5', expanded: false, text: 'project 5 was so cool'},
      { name: 'project6', expanded: false, text: 'project 6 was so cool'},
      { name: 'project7', expanded: false, text: 'project 7 was so cool'},
      { name: 'project8', expanded: false, text: 'project 8 was so cool'},
    ];
  }
}
