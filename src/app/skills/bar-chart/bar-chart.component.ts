import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { barChartService } from './bar-chart-service';

//d3
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Axis from 'd3-axis';
import * as d3Array from 'd3-array';

export interface Margin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  // var - testing

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
  multi: any[] = [];


  // options
  view: any[] = [700, 300];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = 'Legend';
  showXAxisLabel = true;
  tooltipDisabled = false;
  xAxisLabel = 'Skills';
  showYAxisLabel = true;
  yAxisLabel = 'Years';
  showGridLines = true;
  innerPadding = '10%';
  barPadding = 8;
  groupPadding = 16;
  roundDomains = false;
  maxRadius = 10;
  minRadius = 3;
  showSeriesOnHover = true;
  roundEdges: boolean = true;
  animations: boolean = false;
  xScaleMin: any;
  xScaleMax: any;
  yScaleMin: number;
  yScaleMax: number;
  showDataLabel = false;

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };

  constructor(private http: HttpClient, private barChartService: barChartService) {}

  // INIT
  ngOnInit() {
    // retrieve skills list from JSON
    //this.barChartService.getSkills().subscribe(res => {this.skills = res});
    // init chart
  }

  //checking for changes to USER to redraw the cart
  ngOnChanges(){

  }

  onSelect(event) {
    console.log(event);
  }
  
}