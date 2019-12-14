import { Component, OnInit } from '@angular/core';
import { PlayerCreateComponent } from '../player/player-create/player-create.component';
import {MatDialog} from '@angular/material'
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-select',
  templateUrl: './admin-select.component.html',
  styleUrls: ['./admin-select.component.css']
})
export class AdminSelectComponent implements OnInit {
  gameview = true;
  playerview = true;
  constructor(public dialog:MatDialog, public router:Router) { }

  selectGame(){
    this.gameview = true;
  }
  selectPlayer(){
    this.gameview = false;
  }
  ngOnInit() {
  }

  add_player(): void {
    const dialogRef = this.dialog.open(PlayerCreateComponent, {
    width: '500px',
    height: '80%',

    autoFocus:true,

     });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigateByUrl('/admin')
    });
  }


}
