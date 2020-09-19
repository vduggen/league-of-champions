import { Component, OnInit } from '@angular/core';
import { ChampionsMock } from "../mock-champions";

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {
  allChampions: object[] = ChampionsMock;

  constructor() { }

  ngOnInit(): void {
  }
}
