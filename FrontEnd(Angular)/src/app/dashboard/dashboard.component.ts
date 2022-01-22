import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chartOptions!: {};

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
      this.chartOptions = {
        chart: {
            type: 'line',
            style:{
              fontFamily:'Montserrat',
            }
        },
        title: {
            text: 'Evolução Mensal de Despesas',
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yAxis: {
            title: {
                text: 'Despesas (€)'
            }
        },
        credits:{
          enabled:false,
        },
        exporting:{
          enabled:true,
        },
        responsive:{
          rules: [{
            condition:{
              maxWidth:1000,
            },
            chartOptions:{
            }
          }]
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Categoria 1',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            dataLabels: {
              style: {
                fontSize:'9px',
              }}},
            {name: 'Categoria 2',
            data: [9.0, 5.9, 3.5, 19.5, 14.4, 22.5, 27.2, 24.5, 22.3, 20.3, 10.9, 9.6],
            dataLabels: {
              style: {
                fontSize:'9px',
              }}},
            {name: 'Categoria 3',
            data: [2.0, 4.9, 5.5, 6.5, 7.4, 12.5, 17.2, 14.5, 12.3, 20.3, 17.9, 14.6],
            dataLabels: {
              style: {
                fontSize:'9px',
              }}},
        ],
    };
    HC_exporting(Highcharts);

    setTimeout(() => {
        window.dispatchEvent(
          new Event('resize')
        );
    }, 300);
  }
}
