import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

// actions

export const addPepperoni = createAction('[Pizza Detail] Add Pepperoni');
export const removePepperoni = createAction('[Pizza Detail] Remove Pepperoni');
export const addSausage = createAction('[Pizza Detail] Add Sausage');
export const removeSausage = createAction('[Pizza Detail] Remove Sausage');

// reducer

interface PizzaState {
  hasPepperoni: boolean;
  hasSausage: boolean;
}
const initialState: PizzaState = {
  hasPepperoni: false,
  hasSausage: false,
};
export const reducer = createReducer<PizzaState>(
  initialState,
  on(addPepperoni, (state) => ({ ...state, hasPepperoni: true })),
  on(removePepperoni, (state) => ({ ...state, hasPepperoni: false })),
  on(addSausage, (state) => ({ ...state, hasSausage: true })),
  on(removeSausage, (state) => ({ ...state, hasSausage: false }))
);

// selectors
export const PIZZA_FEATURE_NAME = 'pizza';

const CHEESE_PIZZA_IMAGE = 'assets/cheese_pizza.jpeg';
const PEPPERONI_PIZZA_IMAGE = 'assets/pepperoni_pizza.jpeg';
const SAUSAGE_PIZZA_IMAGE = 'assets/sausage_pizza.jpeg';
const PEPPERONI_AND_SAUSAGE_PIZZA_IMAGE =
  'assets/sausage_and_pepperoni_pizza.jpeg';

function determineImageUrl({ hasPepperoni, hasSausage }: PizzaState): string {
  if (hasPepperoni && hasSausage) {
    return PEPPERONI_AND_SAUSAGE_PIZZA_IMAGE;
  } else if (hasPepperoni) {
    return PEPPERONI_PIZZA_IMAGE;
  } else if (hasSausage) {
    return SAUSAGE_PIZZA_IMAGE;
  } else {
    return CHEESE_PIZZA_IMAGE;
  }
}

const STARTING_PRICE = 12;
const PEPPERONI_PRICE = 3;
const SAUSAGE_PRICE = 2.5;
function determinePrice({ hasPepperoni, hasSausage }: PizzaState): number {
  return (
    STARTING_PRICE +
    (hasPepperoni ? PEPPERONI_PRICE : 0) +
    (hasSausage ? SAUSAGE_PRICE : 0)
  );
}

const pizzaFeatureSelector = createFeatureSelector<PizzaState>(
  PIZZA_FEATURE_NAME
);
export const selectPizzaImage = createSelector(
  pizzaFeatureSelector,
  (pizzaState) => determineImageUrl(pizzaState)
);
export const selectPizzaPrice = createSelector(
  pizzaFeatureSelector,
  determinePrice
);
export const hasPepperoni = createSelector(
  pizzaFeatureSelector,
  (pizzaState) => pizzaState.hasPepperoni
);
export const hasSausage = createSelector(
  pizzaFeatureSelector,
  (pizzaState) => pizzaState.hasSausage
);
