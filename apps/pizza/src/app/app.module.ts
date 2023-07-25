import {  BrowserModule } from '@angular/platform-browser';
import {  NgModule, isDevMode } from '@angular/core';
import {  AppComponent } from './app.component';
import {  PizzaComponent } from './pizza/pizza.component';
import {  StoreModule } from '@ngrx/store';
import {  reducer,  PIZZA_FEATURE_NAME } from './pizza.store';
import {  LetDirective,  PushPipe } from '@ngrx/component';
import {  StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, PizzaComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ [PIZZA_FEATURE_NAME]: reducer }),
    LetDirective,
    PushPipe,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
