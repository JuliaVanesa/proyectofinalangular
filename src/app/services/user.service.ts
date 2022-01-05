import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private url = environment.moviesRestApi + 'users'
  validateUser: any;
  constructor(private httpClient: HttpClient)  {}

  getList(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.url)
  }
}
