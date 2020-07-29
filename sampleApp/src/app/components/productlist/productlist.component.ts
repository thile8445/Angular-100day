import { Component, OnInit } from '@angular/core';
import  {Products} from '../../products';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products = Products;
  constructor() { }

  ngOnInit(): void {
  }

}
