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

  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>) {
    
  }

  ngOnInit() {
  }
  update(){
    this.dialogRef.close();
  }
  cancel(){
    this.dialogRef.close();
  }
}
