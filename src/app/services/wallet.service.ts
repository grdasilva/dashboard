import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Region } from './../interfaces/region';
import { Client } from './../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  url = '';

  constructor(private http: HttpClient) { }

  getDataOfRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(this.url)
      .pipe(
        catchError(this.handleError));
  }

  getDataOfClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url)
      .pipe(
        catchError(this.handleError));
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
