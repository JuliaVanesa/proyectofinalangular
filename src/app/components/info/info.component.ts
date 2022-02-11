import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { OnlyMovie } from 'src/app/models/movie.model';
import { CartService } from 'src/app/services/cart.service';
import { InfoService } from 'src/app/services/info.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { cartAddMovie } from '../cart/store/cart.actions';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private infoService: InfoService,
    private store: Store

  ) { }
    private subscription = new Subscription;;

    movie!: OnlyMovie;

    movieToCart: Cart = {id:'', url:'', title:'', imdbID:'', price:0, exists:false};


    allMoviesInCart: Cart[]=[];



  ngOnInit(): void {
    this.subscription.add(this.infoService.getById(this.activatedRoute.snapshot.params['id']).
    subscribe(movies =>{
      if(movies != undefined) {
        this.movie = movies
        console.log(this.movie)
      } else alert ('La pelicula no existe')
    }));
    this.cartService.getList().subscribe(movie => this.allMoviesInCart = movie);
  }

  addToCart() {
    this.movieToCart.id="";
    this.movieToCart.title = this.movie.Title;
    this.movieToCart.url = this.movie.Poster;
    this.movieToCart.price = 500;
    this.movieToCart.imdbID = this.movie.imdbID;
    this.movieToCart.exists=true;

    this.store.dispatch(cartAddMovie({movie : this.movieToCart}))

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Pelicula agregada al carrito',
      showConfirmButton: false,
      timer: 1500
    })

  };

  back() {
    this.router.navigate(['peliculas'])
  }



}
