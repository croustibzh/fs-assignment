import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { GuestTableDataSource, GuestTableItem } from './guest-table-datasource';

@Component({
  selector: 'app-guest-table',
  templateUrl: './guest-table.component.html',
  styleUrls: ['./guest-table.component.css']
})
export class GuestTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<GuestTableItem>;
  dataSource: GuestTableDataSource;

  joinGame(){
    
  }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['player', 'rank', 'score', 'time','gamesPlayed','status','space'];
  ngOnInit() {
    this.dataSource = new GuestTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
