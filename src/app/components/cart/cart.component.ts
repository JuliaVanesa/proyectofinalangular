import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  private subscription = new Subscription

  allMoviesInCart: Cart[] = [];

  total: number = 0;

  ngOnInit(): void {

    this.subscription.add(this.cartService.getList().subscribe(data => {
      this.allMoviesInCart = data;

      this. allMoviesInCart.forEach(m => {
        this.total += m.price
      });
      console.log(this.allMoviesInCart)
    }))
  }



  deleteMovies(id: string) {
    console.log('el id:' +id)

    this.subscription.add(
      this.cartService.delete(id).subscribe(data => console.log(data))
    )

    let index = this.allMoviesInCart.findIndex(m => m.imdbID == id)
    this.total -= this.allMoviesInCart[index].price
    this.allMoviesInCart.splice(index, 1)
  }

}
