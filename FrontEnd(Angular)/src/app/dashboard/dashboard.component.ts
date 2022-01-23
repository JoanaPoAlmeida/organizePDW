import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Highcharts = Highcharts;
  selectMonth : any;
  selectCategory: any;

  public chartOptions: any = {
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
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9,],
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

  constructor() { }
  


  ngOnInit(): void {
    Highcharts.chart('first-tab', this.chartOptions); 
    HC_exporting(Highcharts);

    setTimeout(() => {
        window.dispatchEvent(
          new Event('resize')
        );
    }, 300);
  }

  numberdifferent(num : any){
    let sum = 0;
    for(let x = 0; x< this.chartOptions.series.length; x++){
      if(this.chartOptions.series[x].data[num]==null){
        sum+=0;
      }else{
        sum+= this.chartOptions.series[x].data[num];
      }
    }
    console.log(sum);
    const element = document.getElementById('soma')!;

    var sumRounded = Math.round((sum + Number.EPSILON) * 100) / 100
    element.innerHTML = sumRounded.toString() +'€';
    console.log(element)
  }

  categorydifferent(name : any){
    let soma = 0;
    let test = 0;
    for (let x = 0; x<this.chartOptions.series.length; x++){
      if(this.chartOptions.series[x].name==name){
        for(let i = 0; i<this.chartOptions.series[x].data.length; i++){
          soma += this.chartOptions.series[x].data[i];
        }
      }
    }

    const element = document.getElementById('somaCat')!;

    var somaRounded = Math.round((soma + Number.EPSILON) * 100) / 100
    element.innerHTML = somaRounded.toString() +'€';
    console.log(element)
  }
}
