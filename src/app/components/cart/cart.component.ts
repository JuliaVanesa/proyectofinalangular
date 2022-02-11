import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { cartDeleteMovie } from './store/cart.actions';
import { cartStateSelector } from './store/cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private store : Store
  ) { }

  private subscription = new Subscription

  allMoviesInCart: Cart[] = [];

  total: number = 0;

  ngOnInit(): void {

    this.store.pipe(
      select(cartStateSelector),
      tap(data => {
        console.log("Respuesta desde API", data);
      })
    ).subscribe(data => {

      this.allMoviesInCart = data.movies
    })


    // this.subscription.add(this.cartService.getList().subscribe(data => {
    //   this.allMoviesInCart = data;


      this. allMoviesInCart.forEach(m => {
        this.total += m.price
      });
      console.log(this.allMoviesInCart)
    }




  deleteMovies(id: string) {
    console.log('el id:' +id)

    this.subscription.add(
      this.cartService.delete(id).subscribe(data => console.log(data))
    )

    let index = this.allMoviesInCart.findIndex(m => m.imdbID == id)
    this.total -= this.allMoviesInCart[index].price
    // this.allMoviesInCart.splice(index, 1)

    this.store.dispatch(cartDeleteMovie({id}))

    // let index = this.allMoviesInCart.findIndex(m => m.imdbID == id)
    // this.total -= this.allMoviesInCart[index].price
    // this.allMoviesInCart.splice(index, 1)
  }

}
