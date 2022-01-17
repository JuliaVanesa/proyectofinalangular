import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subscription, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMostViewMovies } from '../models/most-view';

@Injectable({
  providedIn: 'root'
})
export class MostViewAdminService {

  private url = environment.mostViewUrl + 'apiMovies';

  // Variable de suscripcion
  private subscription = new Subscription;

  //Manejo de Errores

  private handleError(error: HttpErrorResponse){



    //Error del Front

    if (error.error instanceof ErrorEvent){

      console.warn("Front error", error.error.message);



    //Error del back

    } else {

      console.warn(`Back error: ${error.status}, body error:

      ${error.message}`)

    }



    return throwError('HTTP comunication ERROR');

  }

  //Variable parametro a pasar

  movie: IMostViewMovies = {

    id: '',

    title: '',

    premiere: 0,

    gender: '',

    adultsOnly: false,

    description: '',

    image: ''

  }

  constructor(
    private httpCliente: HttpClient
  ) { }

  //edita una pelicula

  updateMovies(movie: IMostViewMovies): Observable<IMostViewMovies> {

    return this.httpCliente.put<IMostViewMovies>(this.url+ 'apiMovies'+ '/' + movie.id, movie);

  }

  //Postea una pelicula

  addMovie(movie: IMostViewMovies): Observable<IMostViewMovies> {

    return this.httpCliente.post<IMostViewMovies>(this.url, movie);

  }

   //Elimina la pelicula

   deleteMovie(id: string): Observable<boolean> {

    return this.httpCliente.delete<boolean>(`${this.url}/${id}`)

      //Esto acá es para cuando se busca una peli que no existe en nuestro sistema

      .pipe(catchError(this.handleError));

  }

}
