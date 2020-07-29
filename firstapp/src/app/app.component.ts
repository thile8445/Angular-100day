import { Component, OnChanges, SimpleChange, ViewChild } from '@angular/core';
import { AuthorListComponent } from './components/author-list/author-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  @ViewChild('authorlist') authorlist : AuthorListComponent;
  clicktoggle(){
    this.authorlist.toggle();
  }
  title = 'firstapp';
  choose(hero: string){
    alert(hero);
  }

}
