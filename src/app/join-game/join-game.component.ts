import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<JoinGameComponent>) { }

  ngOnInit() {
  }

  cancelGame(){
    this.dialogRef.close();
  }

  joinGame(){
    this.dialogRef.close();
  }
}
