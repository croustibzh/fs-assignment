import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import{ PlayersService } from '../players.service';
import { Subscription  } from 'rxjs';
import { MatDialog } from '@angular/material';
import { EditPlayerComponent } from 'src/app/edit-player/edit-player.component';
@Component({
  selector: 'app-admin-player-list',
  templateUrl: './admin-player-list.component.html',
  styleUrls: ['./admin-player-list.component.css']
})
export class AdminPlayerListComponent implements OnInit {
  
  
  players : Player[] = [];
  private playersSub: Subscription;
  displayedColumns: string[] = ['username', 'rank', 'score', 'fGame', 'time','update'];

  
  constructor(public playS : PlayersService, public dialog: MatDialog) { }

  ngOnInit() {
    this.playS.getPlayers()
    this.playersSub = this.playS.getPlayersUpdateListener()
    .subscribe((players: Player[])=>
    this.players = players);
  }

  onDelete(id:string){
    console.log("Id to delete:" +id)
    this.playS.deletePlayer(id);
  }
  editPlayer(username:string,rank:Int16Array,score:Int16Array,fgame:string,time:string,status:boolean): void {
    
    const dialogRef = this.dialog.open(EditPlayerComponent, {
      width:"30rem",
      height:"40rem",
      data: {
        player_username: username,
        player_rank: rank,
        player_score: score,
        player_fgame: fgame,
        player_time: time,
        player_status: status
      }});
  }
  
}