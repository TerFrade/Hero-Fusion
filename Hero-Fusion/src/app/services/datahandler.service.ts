import { Injectable } from '@angular/core';
import *  as  HeroesData from '../../assets/heroes.json';
import { Hero } from "../services/types.service";

@Injectable({
  providedIn: 'root'
})
export class DatahandlerService {
  heroes: Hero[] = [];

  getAllHeroes() {
    return this.heroes = HeroesData.heroes;
  }

  getHeroesOfUniverse(universe: string) {
    return this.heroes.filter(x => x.Universe == universe);
  }

  getHeroesOfAlignment(alignment: string) {
    return this.heroes.filter(x => x.Alignment == alignment);
  }
}
