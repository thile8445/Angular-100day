import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-pipe-a',
  templateUrl: './pipe-a.component.html',
  styleUrls: ['./pipe-a.component.css']
})
export class PipeAComponent implements OnInit {
  users  : User[] =[
    {name :'thi1', age : 12},
    {name :'thi2', age : 19},
    {name :'thi3', age : 18},
    {name :'thi4', age : 12},
    {name :'thi5', age : 12},
    {name :'thu6', age : 12},
    {name :'thi7', age : 22},


]
   user1 : User ={name :'' , age : 0};

  constructor() { }

  ngOnInit(): void {
  }
  clickSave(){
    this.users.push (this.user1);
    this.user1 = new User();
  }

}
