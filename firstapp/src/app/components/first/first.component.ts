import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Hero } from '../../models/hero';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  @Output() choice = new  EventEmitter<string>();
  ngOnInit(){

  }
  hero : string = 'thi';
  onSubmit(f: NgForm) {
    console.log(f.value); // { first: '', last: '' }
    console.log(f.valid); // false
  }
  choose(){
    this.choice.emit(this.hero);
  }
}
