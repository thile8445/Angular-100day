import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor( private http:HttpClient ,private formBuider : FormBuilder) { }

  addToCart(product){
    this.items.push(product);
  }
  getItems(){
    return this.items;
  }
  clearItems(){
    this.items = [];
    return this.items;
  }
  getShippingPrice(){
    return this.http.get('../assets/shipping.json');
  }
}
