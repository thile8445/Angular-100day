import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  products = [];
  constructor(private apiService:ApiService) { }

  ngOnInit(){
    this.apiService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    })
  }

}
