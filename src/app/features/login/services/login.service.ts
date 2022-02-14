import { HttpClient, HttpHeaders } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModule } from '../login.module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token: any = null;
  private user = '';
  private userName = '';
  private role = '';

  url = `${environment.apiRest}login`;

  constructor(
    private httpClient: HttpClient
  ) { }

  validateCredentials(user: string, password: string): Observable<boolean> {
    return this.httpClient.post<any>(this.url, { user, password })
    .pipe (
      map(response => {
        if (response.status === 'OK') {
          localStorage.setItem('token', response.token)
          this.token = response.token;
          const decodedToken: any = jwt_decode(this.token);
          this.user = decodedToken?.user;
          this.userName = decodedToken?.userName;
          this.role = decodedToken?.role;
          sessionStorage.setItem('userName', 'role')
          return true;
        } else {
          this.token = null;
          return false;
        }
      })
    )
  }

  // validarToken(): Observable<boolean>{
  //   const url = `${environment.apiRest}reregister`;
  //   const headers = new HttpHeaders()
  //   .set('x-token', localStorage.getItem('token') || '')
  //   const decodedToken: any = jwt_decode(this.token);
  //   this.user = decodedToken?.user;
  //         this.userName = decodedToken?.userName;
  //         this.role = decodedToken?.role;

  //   return this.httpClient.get<any>( url, {headers} )
  //   .pipe(
  //     map(res => {
  //       return res.ok
  //     }),
  //     catchError(err => of(false))
  //   )
  // }

  getToken(): any {
    return this.token;
  }

  isUserLoggedIn() {
    return this.user !== '';
  }

  getUserInfo(): any {
    return {
      user: this.user,
      userName: this.userName,
      role: this.role
    }
  }
}
