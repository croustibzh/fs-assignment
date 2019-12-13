import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material'
@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>) { }

  ngOnInit() {
  }
  update(){
    this.dialogRef.close();
  }
  cancel(){
    this.dialogRef.close();
  }
}
