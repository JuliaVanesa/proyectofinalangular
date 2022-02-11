import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from '../../services/cart.service';
import Swal from 'sweetalert2';
import { cartClear, cartDeleteMovie } from './store/cart.actions';
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



      this. allMoviesInCart.forEach(m => {
        this.total += m.price
      });
      console.log(this.allMoviesInCart)
    }




  deleteMovies(id: string) {
    console.log('el id:' +id)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Pelicula eliminada',
      showConfirmButton: false,
      timer: 1500

    })

    this.subscription.add(
      this.cartService.delete(id).subscribe(data => console.log(data))
    )

    let index = this.allMoviesInCart.findIndex(m => m.imdbID == id)
    this.total -= this.allMoviesInCart[index].price

    this.store.dispatch(cartDeleteMovie({id}))

 }

 deleteAll(){

 this.store.dispatch(cartClear())

 this.allMoviesInCart = []

 this.total = 0;
}
}
