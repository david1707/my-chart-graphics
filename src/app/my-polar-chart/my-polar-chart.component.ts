import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-polar-chart',
  templateUrl: './my-polar-chart.component.html',
  styleUrls: ['./my-polar-chart.component.css']
})
export class MyPolarChartComponent implements OnInit {

  public polarChartLabels = ['North East Area', 'North - North West Area', 'South Area', 'West Area', 'East Area', 'HeadQuarters Area'];
  public polarChartType = 'polarArea';
  public polarChartLegend = true;

  public polarChartData = [ 42, 51, 50, 39, 49, 56 ];

  constructor() { }

  ngOnInit() {
  }

}
