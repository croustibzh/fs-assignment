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

  GamesData: Game[] = [];
  public gamesSub: Subscription
  dataSource: MatTableDataSource<Game[]>;

  constructor(public gS: GamesService){
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title', 'platform','genre','rating','publisher','release','status'];

  ngOnInit() {
  this.gS.getGames()
  this.gamesSub = this.gS.getGamesUpdateListener()
  .subscribe((game: Game[])=>
  this.GamesData = game)
  console.log(this.GamesData)
  }
}
