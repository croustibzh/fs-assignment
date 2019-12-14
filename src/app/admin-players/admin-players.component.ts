import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AdminPlayersDataSource, AdminPlayersItem } from './admin-players-datasource';
import { EditPlayerComponent } from '../edit-player/edit-player.component';
import {MatDialog} from '@angular/material'
@Component({
  selector: 'app-admin-players',
  templateUrl: './admin-players.component.html',
  styleUrls: ['./admin-players.component.css']
})
export class AdminPlayersComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<AdminPlayersItem>;
  dataSource: AdminPlayersDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['player', 'rank', 'score', 'time','gamesPlayed','status','update','delete'];

  ngOnInit() {
    this.dataSource = new AdminPlayersDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  constructor( public dialog: MatDialog) {}
  editPlayer(): void {
    const dialogRef = this.dialog.open(EditPlayerComponent);
  }
}
