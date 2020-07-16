import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError, Observable, ErrorObserver } from 'rxjs';
import { Pokemon } from './../interfaces/pokemon';
import { IBGE } from './../interfaces/ibge';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  readonly url = `${environment.APIBGE}localidades`;
  readonly urlPoke = `${environment.API}pokemon-habitat`;

  constructor(private http: HttpClient) { }

  getDistrict(): Observable<IBGE[]> {
    return this.http.get<any[]>(`${this.url}/distritos`)
      .pipe(
        catchError(this.handleError));
  }

  getTypesOfHabitat(): Observable<Pokemon[]> {
    return this.http.get<any[]>(this.urlPoke)
      .pipe(
        catchError(this.handleError));
  }

  getPokemonByHabitat(filter: string): Observable<Pokemon[]> {
    const url = `${this.urlPoke}/${filter}`;
    return this.http.get<any[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse): Observable<any[]> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
