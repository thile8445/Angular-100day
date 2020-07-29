import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabGroupComponent } from './components/tab-group/tab-group.component';
import { TabPanelComponent } from './components/tab-panel/tab-panel.component';
import { PipeAComponent } from './components/pipe-a/pipe-a.component';
import { IsAdultPipe } from './pipe/is-adult.pipe';
import {NgModel, FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TabGroupComponent,
    TabPanelComponent,
    PipeAComponent,
    IsAdultPipe
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
