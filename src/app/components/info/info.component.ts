import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { OnlyMovie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { CartService } from 'src/app/services/cart.service';
import { InfoService } from 'src/app/services/info.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { cartAddMovie } from '../cart/store/cart.actions';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  // movies: moviesApi[] = [];





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

    // this.subscription.add(
    //   this.cartService.postMovie(this.movieToCart).subscribe(data => {
    //     console.log('data:' +data)
    //   })
    // );

    // let index = this.allMoviesInCart.findIndex(index =>index.imdbID ==this.movieToCart.imdbID);

    // if(index == -1) {
    //   this.allMoviesInCart.push(this.movieToCart);
    //   alert('Pelicula agregada');
    // } else alert ('error')
  };

  back() {
    this.router.navigate(['peliculas'])
  }



}
