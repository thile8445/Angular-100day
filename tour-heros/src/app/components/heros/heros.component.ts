import { Component, OnInit } from '@angular/core';
import {HEROES} from "../../heros";
import { from } from 'rxjs';
import { Hero } from 'src/app/models/hero';
import {HeroService} from '../../services/hero.service';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { MessagesService } from 'src/app/services/messages.service';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heros : Hero[];
  selectedHero : Hero;
  constructor(private heroService : HeroService,private messagesService :MessagesService) { }

  ngOnInit(): void {
    this.getHeros();
  }
  onSelect(hero : Hero){
    this.selectedHero = hero;
    this.messagesService.add(`Heros Components: Selected hero id = ${hero.id}`);
    }
  getHeros():void{
    this.heroService.getHeros().subscribe(heroes => this.heros = heroes);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heros.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heros = this.heros.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
