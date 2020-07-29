import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { ShippingComponent } from './components/shipping/shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductdetailComponent,
    CardComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
    // RouterModule.forRoot([
    //   { path: '', component: ProductlistComponent },
    //   { path: 'products/:productId', component: ProductdetailComponent },
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
