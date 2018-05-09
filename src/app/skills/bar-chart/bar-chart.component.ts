import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { barChartService } from './bar-chart-service';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Axis from 'd3-axis';
import * as d3Array from 'd3-array';

// margin
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

  // var - provided JSON
  skills: any;
  // var - testing
  data=[
   {month:'Angular', A:2, B: 5,  C: 3},
   {month:'Feb', A:5, B: 3, C: 2}
  ];
  // other var
  private margin: Margin;
    private svg: any;    
    private x: any;
    private y: any;
    private z: any;
    private g: any;
  // grid init height and width
  private width: number;
  private height: number;
  
  constructor(private http: HttpClient, private barChartService: barChartService) {}

  // INIT
  ngOnInit() {
    // retrieve skills list from JSON
    this.barChartService.getSkills().subscribe(res => {this.skills = res});
    // init chart
    this.initMargins();
    this.initSvg();
  }

  //checking for changes to USER to redraw the cart
  ngOnChanges(){

  }

  // inital margins
  private initMargins() {
    this.margin = {
      top: 20, 
      right: 20, 
      bottom: 30, 
      left: 40
    };
  }

  // init svg -> general scale and draw chart 
  private initSvg() {
    this.svg = d3.select('svg');

    this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
    this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
    this.g = this.svg.append("g").attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

    this.x = d3Scale.scaleBand()
        .rangeRound([0, this.width])
        .paddingInner(0.05)
        .align(0.1);
    this.y = d3Scale.scaleLinear()
        .rangeRound([this.height, 0]);
    this.z = d3Scale.scaleOrdinal()
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
  }
  
}
