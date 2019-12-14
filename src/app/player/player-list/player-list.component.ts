import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Player } from '../player.model';
import{ PlayersService } from '../players.service';
import { Subscription  } from 'rxjs';
import { MatDialog , MAT_DIALOG_DATA} from '@angular/material';
import { JoinGameComponent } from 'src/app/join-game/join-game.component';
import { GamesService } from 'src/app/games-table/games.services';
import { Game } from 'src/app/games-table/game.model';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit,OnChanges{

  players : Player[];
  private playersSub:Subscription;
  displayedColumns: string[] = ['username', 'rank', 'score', 'fGame', 'time','status','join'];
  games : Game[];

  constructor(public playS : PlayersService,  public gService: GamesService, public dialog: MatDialog) { }

  ngOnInit() {
    this.playS.getPlayers();
    this.playersSub = this.playS.getPlayersUpdateListener()
    .subscribe((players: Player[])=>
    this.players = players);
    this.games = this.gService.games;
  }
  ngOnChanges(){
    this.playS.getPlayers();
    this.playersSub = this.playS.getPlayersUpdateListener()
    .subscribe((players: Player[])=>
    this.players = players);
    ;
  }

  onDelete(id:string){
    console.log("Id to delete:" +id)
    this.playS.deletePlayer(id);
    this.playS.getPlayersUpdateListener();
  }

  joinGame(username:string,rank:Int16Array,score:Int16Array,time:string,status:boolean): void {
    const dialogRef = this.dialog.open(JoinGameComponent,{
      width:'1000px',
      height:'45%',
      data: {
        player_username: username,
        player_rank: rank,
        player_score: score,
        player_time: time,
        player_status: status
      }
    });
  }
}


