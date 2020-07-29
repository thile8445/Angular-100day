import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/products';
import {CartService} from '../../services/cart.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  product;
  constructor(private route :ActivatedRoute,private cardService : CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = Products[+params.get('productId')];

    });
  }

  addToCart(product){
    this.cardService.addToCart(product);
    window.alert("addded card!");
  }


}
