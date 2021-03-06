import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from "rxjs";
import { Cart } from "../../../cart.model";
import { CartService } from "../../../services/cart.service";
import { cartAddMovie, cartClear, cartDeleteMovie, cartSetContent } from "./cart.actions";

@Injectable()



export class CartEffects {



constructor(



private actions: Actions,
private cartService: CartService,
private router: Router
) { }




cartAddItem$ = createEffect(() =>
this.actions.pipe(
ofType(cartAddMovie),
tap(() => console.log('entra')),
switchMap(action => this.cartService.postMovie(action.movie)),
//tap(() => console.log('se termino de llamar a la app')),
map(data => cartSetContent({ movies: data.cartContent as Cart[] })),
// tap(() => this.router.navigate(['carrito']))
)
)



cartDeleteItem$ = createEffect(() =>
this.actions.pipe(
ofType(cartDeleteMovie),
switchMap(action => this.cartService.delete(action.id)),
map(data => cartSetContent({ movies: data.cartContent as Cart[] })),
)
);



cartClean$ = createEffect(() =>
this.actions.pipe(
  ofType(cartClear),
  switchMap(action => this.cartService.deleteAllMovies()),
  map(data => cartSetContent({movies: data.cartContent as Cart[]}))
)
)

}
