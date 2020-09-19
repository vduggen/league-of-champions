import { HomeComponent } from './home/home.component';
import { ChampionsComponent } from './champions/champions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionComponent } from './champion/champion.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent, data: { title: 'Home' }},
  {path: 'champions', component: ChampionsComponent, data: { title: 'Champions' }},
  {path: 'champion/:id', component: ChampionComponent, data: { title: 'Champion' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
