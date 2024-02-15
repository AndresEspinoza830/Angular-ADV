import { Component, Input, SimpleChanges, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent implements OnInit {
  @Input('labels') doughnutChartLabels: string[] = [];
  @Input() data: number[] = [];
  @Input() title: string = '';

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [],
  };

  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        {
          data: this.data,
          backgroundColor: ['#6857E6', '#009FEE', '#F02059'],
        },
      ],
    };
  }
}
