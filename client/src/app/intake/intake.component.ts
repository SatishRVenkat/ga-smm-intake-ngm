import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
interface Tile {
  text: string;
  cols: number;
  rows: number;
  color: string;
}




export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

@Component({
  selector: 'app-intake',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatTableModule, MatPaginatorModule],
  templateUrl: './intake.component.html',
  styleUrl: './intake.component.sass'
})
export class IntakeComponent  implements AfterViewInit {

  

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
  }



  columns:number = 5;
  tiles: Tile[] = [
    {text: 'Pending', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Screen-In', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Screen-Out', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Closed', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Total Intakes', cols: 1, rows: 1, color: '#DDBDF1'},
    
  ];

  constructor(private responsive: BreakpointObserver){

  }

  ngOnInit(){  
    this.responsive.observe([
      Breakpoints.HandsetLandscape, 
      Breakpoints.HandsetPortrait,
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.WebPortrait,
      Breakpoints.WebLandscape
    ]).subscribe(result => {
      const breakpoint = result.breakpoints
      this.columns = 5;
      if(breakpoint[Breakpoints.TabletPortrait]){
        this.columns = 2;
        console.log(breakpoint[Breakpoints.TabletPortrait], this.columns);
      }else if(breakpoint[Breakpoints.TabletLandscape]){
        this.columns = 3;
        console.log(breakpoint[Breakpoints.TabletLandscape], this.columns);
      }else if(breakpoint[Breakpoints.WebPortrait]){
        this.columns = 4;
        console.log(breakpoint[Breakpoints.WebPortrait], this.columns);
      }else if(breakpoint[Breakpoints.WebLandscape]){
        this.columns = 5;
        console.log(breakpoint[Breakpoints.WebLandscape], this.columns);
      }else if(breakpoint[Breakpoints.HandsetLandscape]){
        this.columns = 2;
        console.log(breakpoint[Breakpoints.HandsetLandscape], this.columns);
      }else if(breakpoint[Breakpoints.HandsetPortrait]){
        this.columns = 1;
        console.log(breakpoint[Breakpoints.HandsetPortrait], this.columns);
      }
    });
  }
}
