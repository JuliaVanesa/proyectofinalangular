import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMostViewMovies } from '../models/most-view';

@Injectable({
  providedIn: 'root'
})
export class MostViewService {

  private url = environment.mostViewUrl + 'apiMovies'

  constructor(
    private httpCliente: HttpClient
  ) { }

  getMovies(): Observable<IMostViewMovies[]> {
    return this.httpCliente.get<IMostViewMovies[]>(this.url);
  }
}
