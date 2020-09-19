import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.scss']
})
export class ChampionComponent implements OnInit {
  infoChampion: object;

  constructor(
    private route: ActivatedRoute,
    private ChampionService: ChampionService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getChampion();
    console.log(this.infoChampion)
  }

  getChampion(): void {
    const id = this.route.snapshot.paramMap.get('id');
    let info = this.ChampionService.getInfoChampion(id);
    this.infoChampion = info;
  }
}
