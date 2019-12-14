import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Game } from '../games-table/game.model';
import { Subscription, Observable, Subject,} from 'rxjs';
import { GamesService } from '../games-table/games.services';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent implements OnInit {
  username: string;
  rank:Int16Array;
  score:Int16Array;
  fgame:string;
  time:string;
  status:boolean;
  gameList : Game[];
  gameListener : Subscription;
  constructor( public dialogRef: MatDialogRef<JoinGameComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public gService:GamesService) { 
  }

  ngOnInit() {
    this.username = this.data.player_username;
    this.rank = this.data.player_rank;
    this.score = this.data.player_score;
    this.fgame = this.data.fgame;
    this.time = this.data.player_time;

    this.gService.getGames()
    this.gameListener = this.gService.getGamesUpdateListener()
    .subscribe((games: Game[])=>
    this.gameList= games);
    this.gService.getGamesUpdateListener();
    }

  cancelGame(){
    this.dialogRef.close();
  }

  joinGame(){
    this.dialogRef.close();
  }
}
