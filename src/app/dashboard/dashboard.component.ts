import { Component, OnInit } from '@angular/core';

import { Color, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
export interface PeriodicElement {
  defectName: string;
  Si: number;
  createdby: string;
  createdDate: string;
  status : string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Si: 1, defectName: 'Api Defect', createdby: 'keerthi', createdDate: '12/10/2021',status:'Active'},
  {Si: 2, defectName: 'Json defect', createdby: 'keerthi', createdDate: '12/10/2021',status:'INActive'},
  {Si: 3, defectName: 'Login Defect', createdby: 'keerthi', createdDate: '12/10/2021',status:'Active'},
  {Si: 4, defectName: 'List Defect', createdby: 'keerthi', createdDate: '12/10/2021',status:'Active'},
  {Si: 5, defectName: 'Date defect', createdby: 'keerthi', createdDate: '12/10/2021',status:'INActive'},
  {Si: 6, defectName: 'Showing Defect', createdby: 'keerthi', createdDate: '12/10/2021',status:'Active'},
  {Si: 7, defectName: 'File not Loaded', createdby: 'keerthi', createdDate: '12/10/2021',status:'Active'},

];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['Si', 'defectName', 'createdby', 'createdDate','status'];
  dataSource = ELEMENT_DATA;
  public lineChartData: ChartDataSets[]|any = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Defect No' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any })|any = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public pieChartType: ChartType = "pie";
  public lineChartType:any  = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
