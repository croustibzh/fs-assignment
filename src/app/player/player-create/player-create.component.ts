import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlayersService} from '../players.service';
import { Player } from '../player.model';
@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css'],
  providers:[PlayersService]
})
export class PlayerCreateComponent{

  constructor(public playS: PlayersService) { }
  
  ngOnInit(){
    this.resetForm();
  }
  

  onAddPlayer(form: NgForm){
    if (form.invalid){
       console.log(JSON.stringify(form));
       return;}

    
    this.playS.addPlayer(form.value._id, form.value.username, form.value.rank, form.value.score, form.value.fGame, form.value.status, form.value.time);
    form.resetForm();
  }
  
  
  resetForm(form?: NgForm) {
    if (form) {
      form.resetForm();
    }
    this.playS.selectedPlayer = {
      id:"",
      username: "",
      rank: 0,
      score: 0,
      time:"",
      status:"",
      fGame:""
    }
  }
}
