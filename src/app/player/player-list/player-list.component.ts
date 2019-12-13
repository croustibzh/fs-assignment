import { Component, OnInit, OnDestroy } from '@angular/core';
import { Player } from '../player.model';
import{ PlayersService } from '../players.service';
import { Subscription  } from 'rxjs';
import { MatDialog } from '@angular/material';
import { JoinGameComponent } from 'src/app/join-game/join-game.component';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit{

  players : Player[] = [];
  private playersSub: Subscription;
  displayedColumns: string[] = ['username', 'rank', 'score', 'fGame', 'time','status','update'];


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
  joinGame(id:string): void {
    const dialogRef = this.dialog.open(JoinGameComponent,{
      width:'500px',
      height:'35%'
    });
  }
}


