import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { moviesApi  } from 'src/app/models/movie.model';
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

  // movies: moviesApi[] = [];
  allMovies : moviesApi[] = [];

    private subscription = new Subscription

  ngOnInit(): void {

    for (let i = 1; i<9; i++) {
      this.subscription.add(this.movieService.getMovies(i).subscribe(data =>{
        console.log(data)
        this.allMovies = this.allMovies.concat(data.Search);


      }))
    }

  //  this.subscription = this.movieService.getMovies(i).subscribe(movies => {this.movies = movies.Search});

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
