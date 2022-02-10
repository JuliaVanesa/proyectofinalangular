import { createAction, props } from "@ngrx/store";
import { Cart } from "src/app/models/cart.model";


export const cartAddMovie = createAction(
  'Cart - Add movie from cart',
  props<{ movie: Cart }>()
  );



  export const cartDeleteMovie = createAction(
  'Cart - Delete from cart',
  props<{ id: string }>()
  );



  export const cartClear = createAction(
  'Cart - Clear Cart',
  );



  export const cartSetContent = createAction(
  'Cart - Set cart content',
  props<{ movies: Cart[] }>()
  )
