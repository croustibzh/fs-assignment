import { Player } from './player.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { NgForm } from '@angular/forms';



@Injectable({ providedIn: 'root' })
export class PlayersService {
    private players: Player[] = [];
    selectedPlayer: Player;
    private playersUpdated = new Subject<Player[]>()

    constructor(private http: HttpClient) {

    }
    getPosts() {
        this.http.get<{ message: string, players: Player[]}>('http://localhost:3000/api/players')
            .subscribe((playerData) => {
                this.players = playerData.players;
                this.playersUpdated.next([...this.players]);
            });
    }

    getPlayersUpdateListener() {
        return this.playersUpdated.asObservable();
    }

    addPlayer(_id:string, username: string, rank: number, score: number, fGame: string, status: string, time: string) {
        const player: Player = { _id: null, username: username, rank: rank, score: score, fGame: fGame, status: status, time: time };
        this.http.post<{message:string}>('http://localhost:3000/api/players',player).subscribe((responseData)=>{
                console.log(responseData);
            });
        this.players.push(player);
        this.playersUpdated.next([...this.players]);
    } 
}