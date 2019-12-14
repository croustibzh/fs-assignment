import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'
@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  username: string;
  rank:Int16Array;
  score:Int16Array;
  fgame:string;
  time:string;
  status:boolean;
  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data)
    this.username = this.data.player_username;
    this.rank = this.data.player_rank;
    this.score = this.data.player_score;
    this.fgame = this.data.fgame;
    this.time = this.data.player_time;
    this.status = this.data.status;
  }
  update(){
    this.dialogRef.close();
  }
  cancel(){
    this.dialogRef.close();
  }
}
