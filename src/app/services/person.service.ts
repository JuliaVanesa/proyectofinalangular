import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { userMock } from './user.mock';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  getList(): Observable<User[]>{
    return of (userMock)
  }
}
