import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  items;
  checkoutForm;
  constructor(private cardService : CartService, private formBuider : FormBuilder) {
    this.checkoutForm = formBuider.group({
      name : '',
      address : ''
    });
   }

  ngOnInit(): void {
    this.items = this.cardService.getItems();
  }
  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cardService.clearItems();
    this.checkoutForm.reset();
    console.log('1');
    console.warn('Your order has been submitted', customerData);
    console.log('2');
  }
}
