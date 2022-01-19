import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { moviesApi, Movie  } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {



  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  movies: moviesApi[] = [];

    private subscription: Subscription | undefined;

  ngOnInit(): void {

   this.subscription = this.movieService.getMovie().subscribe(movies => {this.movies = movies.Search});

  }


  navigateToInfo(id: string) {
    this.router.navigate(['peliculas', id
  ])
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['login'])

  }

//   addToCart(){

//     this.movieToCart.title = this.movies.title;
//     this.movieToCart.url = this.movies.url;
//     this.movieToCart.price = 500;
//     this.movieToCart.imdbID = this.movies.id;

// // this.subscription?.add(
//   this.cartService.postMovie(this.movieToCart).subscribe(data => console.log(data))

// }
}
