import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorDetailComponent } from './components/author-detail/author-detail.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import {FormsModule} from '@angular/forms';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component'


@NgModule({
  declarations: [
    AppComponent,
    AuthorDetailComponent,
    AuthorListComponent,
    FirstComponent,
    SecondComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
