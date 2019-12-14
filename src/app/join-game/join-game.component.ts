import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Game } from '../games-table/game.model';
import { Subscription } from 'rxjs';
import { GamesService } from '../games-table/games.services';

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

  constructor( public gService: GamesService,public dialogRef: MatDialogRef<JoinGameComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { 
    }

    gameList :Game[] =[];
  gameListener : Subscription;
  ngOnInit() {
    this.username = this.data.player_username;
    this.rank = this.data.player_rank;
    this.score = this.data.player_score;
    this.fgame = this.data.fgame;
    this.time = this.data.player_time;
    this.status = this.data.status;
  }

  cancelGame(){
    this.dialogRef.close();
  }

  joinGame(){
    this.dialogRef.close();
  }
}
