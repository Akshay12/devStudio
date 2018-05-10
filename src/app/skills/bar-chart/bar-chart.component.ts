import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { barChartService } from './bar-chart-service';
import * as d3 from 'd3-collection';
import { colorSets as ngxChartsColorsets } from '@swimlane/ngx-charts/release/utils/color-sets';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {BarChartModule} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  // var - provided JSON
  skills: any;
  // var - testing
  data: any[] = [
    [
      {
        "name": "Angular",
        "skills": [
          {
            "name": "Chris",
            "years": "5"
          },
          {
            "name": "Akshay",
            "years": "5"
          },
          {
            "name": "Pedrum",
            "years": "4"
          },
          {
            "name": "Mary",
            "years": "4"
          }
        ]
      },
      {
        "name": "HTML",
        "skills": [
          {
            "name": "Chris",
            "years": "6"
          },
          {
            "name": "Akshay",
            "years": "5"
          },
          {
            "name": "Pedrum",
            "years": "4"
          },
          {
            "name": "Mary",
            "years": "3"
          }
        ]
      },
      {
        "name": "CSS",
        "skills": [
          {
            "name": "Chris",
            "years": "5"
          },
          {
            "name": "Akshay",
            "years": "5"
          },
          {
            "name": "Pedrum",
            "years": "4"
          },
          {
            "name": "Mary",
            "years": "4"
          }
        ]
      },
      {
        "name": "TypeScript",
        "skills": [
          {
            "name": "Chris",
            "years": "5"
          },
          {
            "name": "Akshay",
            "years": "5"
          },
          {
            "name": "Pedrum",
            "years": "4"
          },
          {
            "name": "Mary",
            "years": "4"
          }
        ]
      },
      {
        "name": "Git",
        "skills": [
          {
            "name": "Chris",
            "years": "5"
          },
          {
            "name": "Akshay",
            "years": "5"
          },
          {
            "name": "Pedrum",
            "years": "4"
          },
          {
            "name": "Mary",
            "years": "4"
          }
        ]
      }
    ]
    
  ];

  single: any[] = [
    {
      name: "Angular",
      value: 5
    },
    {
      name: "HTML",
      value: 4
    },
    {
      name: "CSS",
      value: 3
    }
  ];


  // options
  view: any[] = [600, 300];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Skills";
  showYAxisLabel = true;
  yAxisLabel = "Years";

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };
  
  constructor(private http: HttpClient, private barChartService: barChartService, barChart: BarChartModule) {}

  // INIT
  ngOnInit() {
    // retrieve skills list from JSON
    //this.barChartService.getSkills().subscribe(res => {this.skills = res});
    console.log(this.data.length);
    // init chart
  }

  //checking for changes to USER to redraw the cart
  ngOnChanges(){

  }

  onSelect(event) {
    console.log(event);
  }
  
}