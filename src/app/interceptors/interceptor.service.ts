import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})


export class InterceptorService implements HttpInterceptor {

  constructor(
    private loginService: LoginService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.loginService.getToken();

    const isApiUrl = request.url.startsWith(environment.apiRest);

    if(token && isApiUrl) {
      request= request.clone({
        setHeaders: { Authorization: `Bearer ${token}`
      }
    });
    console.log(request)
    }
    return next.handle(request)

  }
}
