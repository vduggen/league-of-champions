import { Component, OnInit } from '@angular/core';
import { ChampionsMock, ChampionsName } from '../mock-champions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  randomChampions: string[] = [];
  infosChampions: object[] = []
  randomImage: string;

  constructor() { }

  ngOnInit(): void {
    this.getRandomChampions();
    this.getInfoChampionsRandom();
    this.getRandomImage();
  }

  getRandomChampions(): void {
    let numberOfChampions = 8;
    for (let i = 0; i < numberOfChampions; i++) {
      this.randomChampions.push(ChampionsName[Math.floor(Math.random() * ChampionsName.length)]);
    }
  }

  getInfoChampionsRandom(): void {
    for (let champion of this.randomChampions) {
      for (let championInfo of ChampionsMock) {
        if (championInfo.name === champion) {
          this.infosChampions.push(championInfo);
        }
      }
    }
  }

  getRandomImage(): void {
    this.randomImage = ChampionsMock[Math.floor(Math.random() * ChampionsMock.length)].splash;
  }
}
