import { Game } from './game.model';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class GamesService {

    private games: Game[]=[];
    private gamesUpdated = new Subject<Game[]>();
    constructor(private http: HttpClient) {
    }

    getGames(){
      return this.http
      .get<{games: Game[]}>('http://localhost:3000/api/games'
      )
      .pipe(map((gData)=>{
          return gData.games.map(resGame=>{
              return {
                id:resGame.id,
                title:resGame.title,
                platform:resGame.platform,
                genre:resGame.genre,
                rating:resGame.rating,
                publisher:resGame.publisher,
                release:resGame.release,
                status:resGame.status,
              };
          });
      }))
      .subscribe(transformedGames =>{
          this.games = transformedGames;
          this.gamesUpdated.next([...this.games]);
      });
}

getGamessUpdateListener() {
  return this.gamesUpdated.asObservable();
}
}
