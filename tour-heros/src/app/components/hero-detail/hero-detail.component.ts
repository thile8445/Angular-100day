import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  constructor(
    private localtion :Location,
    private herosService : HeroService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.herosService.getHero(id).subscribe(h => this.hero = h);
  }
  goBack():void{
    this.localtion.back();
  }
  save(): void {
    this.herosService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}
