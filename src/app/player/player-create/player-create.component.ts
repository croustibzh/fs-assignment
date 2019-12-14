import { Subscription } from 'rxjs';
import { GamesService } from './../../games-table/games.services';
import { Game } from './../../games-table/game.model';
import { Component } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { PlayersService} from '../players.service';
import { Player } from '../player.model';
import {MatDialogRef} from '@angular/material'

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css'],
  providers:[PlayersService]
})
export class PlayerCreateComponent{

  constructor(public playS: PlayersService, public gService: GamesService,public dialogRef: MatDialogRef<PlayerCreateComponent>) { }
  playForm: FormGroup;

  gameList :Game[] =[];
  gameListener : Subscription;
  selectedPlayer: Player = this.playS.selectedPlayer;
  


  ngOnInit(){
    this.gService.getGames()
    this.gameListener = this.gService.getGamesUpdateListener()
    .subscribe((games: Game[])=>
    this.gameList= games);
  }


  onAddPlayer(form: NgForm){
    if (form.invalid){
       console.log(JSON.stringify(form));
       return;}

    this.playS.addPlayer(form.value.id, form.value.username, form.value.rank, form.value.score, form.value.fGame, form.value.status, form.value.time);
    form.resetForm();
    this.dialogRef.close();
  }
  goback(){
    this.dialogRef.close();
  }


  resetForm(form?: NgForm) {
    if (form) {
      form.resetForm();
    }
    this.playS.selectedPlayer = {
      _id:"",
      username: "",
      rank: 0,
      score: 0,
      time:0,
      status:true,
      fGame:""
    }
  }
}
