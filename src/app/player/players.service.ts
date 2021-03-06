import { Player } from "./player.model";
import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class PlayersService {
  
  public playersURL = "http://localhost:3000/api/players";
  selectedPlayer: Player = {
    _id: "",
    username: "",
    rank: 0,
    score: 0,
    time: 0,
    status: false,
    fGame: ""
  };

  constructor(private http: HttpClient) {}


  private players: Player[] = [];
  private playersUpdated = new Subject<Player[]>();

  getPlayers() {
    this.http
      .get<{ players: Player[] }>(this.playersURL)
      .pipe(
        map(pData => {
          return pData.players.map(player => {
            return {
              _id: player._id,
              username: player.username,
              rank: player.rank,
              score: player.score,
              fGame: player.fGame,
              status: player.status,
              time: player.time
            };
          });
        })
      )
      .subscribe(transformedPlayers => {
        this.players = transformedPlayers;
        this.playersUpdated.next([...this.players]);
      });
  }

  getPlayersUpdateListener() {
    return this.playersUpdated.asObservable();
  }

  addPlayer(
    _id: string,
    username: string,
    rank: number,
    score: number,
    fGame: string,
    status: boolean,
    time: number
  ) 
  {
    const player: Player = {
      _id: null,
      username: username,
      rank: rank,
      score: score,
      fGame: fGame,
      status: status,
      time: time
    };
    this.http
      .post<{ message: string }>(this.playersURL, player)
      .subscribe(responseData => {
        console.log(responseData);
      });
    this.getPlayers();
    this.playersUpdated.next([...this.players]);
    this.getPlayersUpdateListener();
  }

  deletePlayer(id: string) {
    this.http
      .delete("http://localhost:3000/api/players/" + id)
      .subscribe(() => {
        console.log("player service deleted the player");
        
      });
      this.getPlayers();
      this.playersUpdated.next([...this.players]);
      this.getPlayersUpdateListener();
  }
}
