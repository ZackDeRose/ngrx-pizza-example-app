import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [AppComponent, PizzaComponent],
  imports: [BrowserModule, ReactiveComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
