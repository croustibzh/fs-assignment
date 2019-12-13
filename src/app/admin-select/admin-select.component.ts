import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-select',
  templateUrl: './admin-select.component.html',
  styleUrls: ['./admin-select.component.css']
})
export class AdminSelectComponent implements OnInit {
  gameview = true;
  playerview = true;
  constructor() { }

  selectGame(){
    this.gameview = true;
  }
  selectPlayer(){
    this.gameview = false;
  }
  ngOnInit() {
  }

}
