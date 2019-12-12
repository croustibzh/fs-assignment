import { Game } from './game.model';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class GamesService {

    private players: Game[]=[];
    private playersUpdated = new Subject<Game[]>();

    public playersURL ='http://localhost:3000/api/players';
    selectedPlayer: Game;

    constructor(private http: HttpClient) {
    }



    getPlayers(){
  this.http
  .get<{players:any}>(
      this.playersURL
      )
      .pipe(map((pData)=>{
          return pData.players.map(player=>{
              return {
                  id:player._id, username: player.username, rank: player.rank,
                  score: player.score, fGame: player.fGame, status: player.status, time: player.time
              };
          });
      }))
      .subscribe(transformedPlayers =>{
          this.players = transformedPlayers;
          this.playersUpdated.next([...this.players]);
      });
}

getPlayersUpdateListener() {
  return this.playersUpdated.asObservable();
}
}
