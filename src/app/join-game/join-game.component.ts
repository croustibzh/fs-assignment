import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Player } from '../player/player.model';
import { DialogData } from '../DialogData';
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

  constructor(public dialogRef: MatDialogRef<JoinGameComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log(this.data);
    }

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
