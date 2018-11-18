import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {

  public lineChartLabels = ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'];
  public lineChartType = 'line';
  public lineChartLegend = true;

  public lineChartData = [
    {data: [65, 59, 80, 24], label: 'Business A'},
    {data: [48, 40, 65, 90], label: 'Business B'},
    {data: [77, 48, 59, 40], label: 'Business C'}
  ];

  public lineChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          max: 100,
          min: 0
        }
      }]
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
