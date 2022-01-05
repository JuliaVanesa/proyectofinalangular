import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { OnlyMovie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { CartService } from 'src/app/services/cart.service';
import { InfoService } from 'src/app/services/info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  // movies: moviesApi[] = [];

  movieToCart: Cart = {id:'', url:'', title:'', imdbID:'', price:0};

  movie!: OnlyMovie;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private cartService: CartService,
    private infoService: InfoService,

  ) { }
    private subscription: Subscription | undefined;



  ngOnInit(): void {
    this.infoService.getById(this.activatedRoute.snapshot.params['id'])
    .subscribe(movies => this.movie = movies);


  }

    addToCart(){

    this.movieToCart.title = this.movie.Title;
    this.movieToCart.url = this.movie.Poster;
    this.movieToCart.price = 500;
    this.movieToCart.imdbID = this.movie.imdbID;

// this.subscription?.add(
  this.cartService.postMovie(this.movieToCart).subscribe(data => console.log(data))

}

}
