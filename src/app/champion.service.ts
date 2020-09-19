import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChampionsMock } from './mock-champions';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  private baseURL: string = 'http://ddragon.leagueoflegends.com/cdn/10.19.1';

  constructor( private http: HttpClient ) { }

  getChampions(): Observable<[]> {
    return this.http.get<[]>(`${this.baseURL}/data/pt_BR/champion.json`);
  }
  
  getImagesOfChampions(championName: string): Observable<[]> {
    return this.http.get<[]>(`${this.baseURL}/img/champion/${championName}.png`);
  }

  getInfoChampion(championName: string): object {
    for (let championInfo of ChampionsMock) {
      if (championInfo.id === championName) {
        return championInfo;
      }
    }
  }
}
