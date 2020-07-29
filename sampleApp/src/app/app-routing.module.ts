import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { CardComponent } from './components/card/card.component';
import { ShippingComponent } from './components/shipping/shipping.component';

const routes: Routes = [
  { path: 'products/:productId', component: ProductdetailComponent },
  { path: 'cart', component: CardComponent },
  { path: 'shipping', component: ShippingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
