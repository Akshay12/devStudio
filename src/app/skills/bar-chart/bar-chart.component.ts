import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import Chart from "chart.js";
import { ReturnStatement } from "@angular/compiler";


@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"]
})
export class BarChartComponent implements OnInit {

  @Input('currentMem') currentMem: any;
  @Input('faces') faces: any;

  // arranged data for full team
  totalData: any;
  // arranged data for single person
  data: any;
  legend: any;
  myBarChart:any;

  constructor(
    private http: HttpClient
  ) {}
  // INIT
  ngOnInit() {
  }

  initChart(chartData){
    // stacked

    // Bar chart
    var ctx = document.getElementById('bar-chart');
    this.myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.getSkills(chartData.skills),
        datasets: [
          {
            label: "Years",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: this.getyears(chartData.skills)
          }
        ]
      },
      options: {
        legend: { display: false },
        scales: {
          yAxes: [{
              display: true,
              ticks: {
                  suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                  stepSize: 1,
              }
            }]
          },title: {
          display: true,
          text: this.getName(chartData)
        }
      }
    });
  }

  /*
  helper parse data through;
  */
  getSkills(memData){
    let temp:any = [];

    for(let i in memData){
      temp.push(memData[i].name);
    }
    return temp;
  }

  getyears(memData){
    let temp:any = [];

    for(let i in memData){
      temp.push(parseInt(memData[i].level));
    }
    return temp;
  }

  getName(memData){
    let temp = memData.name;
    return temp;
  }


  //checking for changes to USER to redraw the cart
  ngOnChanges() {
    // parse all
    if (this.faces && this.currentMem === null){
    // init chart
    //this.initChart(this.totalData);
    }
    if (this.currentMem){
      // init chart
      if(this.myBarChart !== undefined){
        this.myBarChart.destroy();
      }
      this.initChart(this.currentMem);
    }
    
  }

  onSelect(event) {
    console.log(event);
  }
}
