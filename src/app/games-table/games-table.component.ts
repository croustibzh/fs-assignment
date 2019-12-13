import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Game } from './game.model';
import { GamesService } from './games.services'
import { Subscription, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.css']
})
export class GamesTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Game>;

  GamesData: any = [];
  public gamesSub: Subscription
  dataSource: MatTableDataSource<Game[]>;

  constructor(public gS: GamesService){
    // this.gS.getGames().subscribe(data => {
    //   this.GamesData = data;
    //   this.dataSource = new MatTableDataSource<Game[]>(this.GamesData);
    //   setTimeout(()=> {
    //   this.dataSource.paginator = this.paginator;
    //   }, 0);
    // });
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title', 'platform','genre','rating','publisher','release','status'];

  ngOnInit() {
  this.gS.getGames()
  this.gamesSub = this.gS.getGamessUpdateListener()
  .subscribe((game: Game[])=>
  this.GamesData = game)
  this.dataSource = this.GamesData;
  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  //   this.table.dataSource = this.dataSource;
  // }
  }
}
