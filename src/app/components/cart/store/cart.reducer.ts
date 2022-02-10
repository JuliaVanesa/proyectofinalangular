import { createReducer, on } from "@ngrx/store";
import { CartState } from "./cart-store.state";
import { cartSetContent } from "./cart.actions";

export const cartInitialState: CartState = {  movies: [] }



export const _cartReducer = createReducer(



cartInitialState,
on(cartSetContent, (state, { movies }) => {




return {
...state,
movies,
};
})
);



export function cartReducer(state: any, action: any) {
return _cartReducer(state, action);
}
