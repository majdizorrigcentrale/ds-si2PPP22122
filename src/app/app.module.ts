import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListePaysComponent } from './pays/liste-pays/liste-pays.component';
import { ItemPaysComponent } from './pays/item-pays/item-pays.component';
import { ItemContinentComponent } from './continents/item-continent/item-continent.component';
import { ListeContinentComponent } from './continents/liste-continent/liste-continent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListePaysComponent,
    ItemPaysComponent,
    ItemContinentComponent,
    ListeContinentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
