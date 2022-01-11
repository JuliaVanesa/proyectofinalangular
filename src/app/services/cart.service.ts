import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from '../models/cart.model';


@Injectable({
  providedIn: 'root'
})


export class CartService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private url = environment.cartApi;

  getList(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.url);
  }


  postMovie(movie : Cart): Observable<Cart> {
    console.log(movie)
    return this.httpClient.post<Cart>(this.url,movie);
  }

  delete(id: string): Observable<boolean>{
    return this.httpClient.delete<boolean>(`${this.url}/${id}`)
}

}
