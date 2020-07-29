import { Component, OnInit } from '@angular/core';
import {authors} from '../../authors';
import { Author } from 'src/app/interfaces/author';
@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors= authors;
  constructor() { }
  valu ='first value';
  ngOnInit(): void {
  }
  deleteAuthorList(author :Author){
    this.authors = this.authors.filter(a => a.id != author.id);
  }
  toggle(){
    alert('click toggle viewchid');
  }

}
