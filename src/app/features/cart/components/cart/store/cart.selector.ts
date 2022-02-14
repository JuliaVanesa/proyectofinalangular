import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart-store.state";

export const cartStateSelector = createFeatureSelector<CartState>('cart');



export const cartItemsSelector = createSelector (
cartStateSelector,
(state: CartState) => state.movies
);
