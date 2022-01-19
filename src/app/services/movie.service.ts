import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class MovieService {


  private key = environment.key;
  private search = '?s='
  private url = environment.apiMovie + this.search + 'star wars' + this.key;

  constructor(
    private httpCliente: HttpClient
  ) { }

  // getInfo(id: string): Observable<Movie | undefined> {
  //   return of(moviesMock.find(movie => movie.id === id))
  // }
  // getList(): Observable<Movie[]> {
  //   //return of(moviesMock);
  //   return this.httpCliente.get<Movie[]>(this.url)

  // }

  // getMovie() {
  //   return this.httpCliente.get<Movie>(this.url + this.search + 'star wars'+ this.key)
  // }

  getMovies(id: Number):Observable<Movie>{
    let params = new HttpParams().append('page', String(id))

    return this.httpCliente.get<Movie>(this.url, {params})
  }



  // addCart(id: string): Observable<Movie[]> {

  // }

}
