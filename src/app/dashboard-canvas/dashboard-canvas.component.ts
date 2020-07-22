import { Component, OnInit } from '@angular/core';
import * as Chart from  'chart.js';


@Component({
  selector: 'app-dashboard-canvas',
  templateUrl: './dashboard-canvas.component.html',
  styleUrls: ['./dashboard-canvas.component.css']
})
export class DashboardCanvasComponent implements OnInit {
  chart = [];
  
  constructor() { }

  ngOnInit() {
    // important declaration of HTML canvas element
    var canvas = <HTMLCanvasElement> document.getElementById("canvas");
    this.chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
          { 
            data: [23,32,323,423,432, 250],
            borderColor: "#3cba9f",
            fill: false
          },
          { 
            data: [347,102,350,243,212,305],
            borderColor: "#ffcc00",
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
    console.log(this.chart);
  }
}
