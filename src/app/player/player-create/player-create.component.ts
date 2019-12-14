import { Subscription } from 'rxjs';
import { GamesService } from './../../games-table/games.services';
import { Game } from './../../games-table/game.model';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { PlayersService} from '../players.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css'],
  providers:[PlayersService]
})
export class PlayerCreateComponent{

  constructor(public playS: PlayersService, public gService: GamesService) { }
  playForm: FormGroup;

  selectedPlayer: Player = this.playS.selectedPlayer;
  gameList :Game[] =[];
  gameListener : Subscription;


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

<<<<<<< HEAD
    
=======

>>>>>>> 0bd0e66046794c2d2499412435b844a7087fe5b6
    this.playS.addPlayer(form.value.id, form.value.username, form.value.rank, form.value.score, form.value.fGame, form.value.status, form.value.time);
    form.resetForm();
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
