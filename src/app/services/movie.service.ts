import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = environment.apiMovie;
  private key = environment.key;
  private search = '?s='

  constructor(
    private httpCliente: HttpClient
  ) { }

  // getInfo(id: string): Observable<Movie | undefined> {
  //   return of(moviesMock.find(movie => movie.id === id))
  // }
  getList(): Observable<Movie[]> {
    //return of(moviesMock);
    return this.httpCliente.get<Movie[]>(this.url)

  }

  getMovie() {
    return this.httpCliente.get<Movie>(this.url + this.search + 'star wars'+ this.key)
  }

  // addCart(id: string): Observable<Movie[]> {

  // }

}
