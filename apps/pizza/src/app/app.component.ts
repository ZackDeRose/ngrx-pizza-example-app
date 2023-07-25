import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPizzaPrice } from './pizza.store';

@Component({
  selector: 'ngrx-pizza-example-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  price$ = this._store.select(selectPizzaPrice);

  constructor(private _store: Store) {}
}
