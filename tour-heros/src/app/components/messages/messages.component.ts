import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {


  constructor(public messageService : MessagesService) { }

  ngOnInit(): void {
  }
  length = this.messageService.messages.length;
  messages = this.messageService.messages;
  clear(){
    this.messageService.clear();
  }

}
