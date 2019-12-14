import { Player } from "./player.model";
import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class PlayersService {
  private players: Player[] = [];
  private playersUpdated = new Subject<Player[]>();

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
        this.getPlayersUpdateListener();
      });
  }

<<<<<<< HEAD
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
=======
  getPlayersUpdateListener() {
    return this.playersUpdated.asObservable();
  }
>>>>>>> 0bd0e66046794c2d2499412435b844a7087fe5b6

  addPlayer(
    id: string,
    username: string,
    rank: number,
    score: number,
    fGame: string,
    status: boolean,
    time: number
  ) {
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
    this.players.push(player);
    this.playersUpdated.next([...this.players]);
    this.getPlayersUpdateListener();
  }

<<<<<<< HEAD
    addPlayer(id:string, username: string, rank: number, score: number, fGame: string, status: string, time: string) {
        const player: Player = { id:null, username: username, rank: rank, score: score, fGame: fGame, status: status, time: time };
        this.http.post<{ message: string }>(this.playersURL, player)
        .subscribe((responseData) => {
            console.log(responseData.message);
        });
        this.players.push(player);
        this.playersUpdated.next([...this.players]);
    }

    deletePlayer(id :string){
        this.http.delete("http://localhost:3000/api/players/"+id)
        .subscribe(()=>{
            const updatedPlayers = this.players.filter(player => player.id != id);
            this.players = updatedPlayers;
            this.playersUpdated.next([...this.players]);
        });
    }
}
=======
  deletePlayer(id: string) {
    this.http
      .delete("http://localhost:3000/api/players/" + id)
      .subscribe(() => {
        console.log("player service deleted the player");
        this.playersUpdated.next([...this.players]);
        this.getPlayersUpdateListener();
      });
  }
}
>>>>>>> 0bd0e66046794c2d2499412435b844a7087fe5b6
