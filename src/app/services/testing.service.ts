import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Pokemon } from './../interfaces/pokemon';
import { IBGE } from './../interfaces/ibge';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  url = 'https://servicodados.ibge.gov.br/api/v1/localidades/distritos';
  urlAgregate = 'https://pokeapi.co/api/v2/pokemon-habitat';

  constructor(private http: HttpClient) { }

  getDistrict(): Observable<IBGE[]> {
    return this.http.get<any[]>(this.url)
      .pipe(
        catchError(this.handleError));
  }

  getAgregate(): Observable<any[]> {
    return this.http.get<any[]>(this.urlAgregate)
      .pipe(
        catchError(this.handleError));
  }

  getByID(filter: string): Observable<Pokemon[]> {
      const url = `${this.urlAgregate}/${filter}`;
      return this.http.get<any[]>(url).pipe(
        catchError(this.handleError)
      );
  } 

  handleError(error: HttpErrorResponse) {
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
  };

}
