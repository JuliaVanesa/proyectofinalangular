import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OnlyMovie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private url: string = environment.apiMovie;
  private apiKey:string = environment.key
  private query: string = '?i='

  constructor(private httpClient: HttpClient) { }

  getById(id: string): Observable<OnlyMovie>{
    return this.httpClient.get<OnlyMovie>(this.url + this.query +  id + this.apiKey)
}
}
