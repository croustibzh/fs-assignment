import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Player } from '../player/player.model';
@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<JoinGameComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log(this.data);
    }

  ngOnInit() {
  }

  cancelGame(){
    this.dialogRef.close();
  }

  joinGame(){
    this.dialogRef.close();
  }
}
