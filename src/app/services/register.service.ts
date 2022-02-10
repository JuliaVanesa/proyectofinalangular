import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private httpClient: HttpClient
  ) { }

  url = `${environment.apiRest}register`;

  getUser : User[] = []

  newUser(user: User) : Observable<User> {
    return this.httpClient.post<User>(this.url, user);
  }

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.url);
  }


}
