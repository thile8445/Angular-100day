import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/heros';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heros = HEROES;
  constructor(private heroService :HeroService) { }

  ngOnInit(): void {
    this.getHeros();
  }
  getHeros():void{
    this.heroService.getHeros().subscribe(heros =>this.heros = heros.slice(1,5));
  }

}
