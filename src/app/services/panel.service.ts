import { Injectable } from '@angular/core';
import { PainelEC } from './../interfaces/painelEC';
import { PainelRH } from './../interfaces/painelRH';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PanelService {

  readonly urlRH = 'assets/mocks/painelRHBaseAtiva.constant.json';
  readonly urlRHPC = 'assets/mocks/painelRHPipelineClientes.constant.json';
  readonly urlRH2 = 'assets/mocks/painelRH2.constant.json';
  readonly urlEC = 'assets/mocks/painelEC.constant.json';
  readonly urlRS = 'assets/mocks/painelRS.constant.json';

  constructor(private http: HttpClient) { }
  

  getInformationPanelRH(): Observable<PainelRH[]> {
    return this.http.get<PainelRH[]>(this.urlRH)
      .pipe(
        catchError(this.handleError))
  }

  getInformationPanelRHPC(): Observable<PainelRH[]> {
    return this.http.get<PainelRH[]>(this.urlRHPC)
      .pipe(
        catchError(this.handleError))
  }

  updateInformationPanelRH(): Observable<PainelRH[]> {
    return this.http.get<PainelRH[]>(this.urlRH2)
      .pipe(
        catchError(this.handleError))
  }

  // Manipulação de erros
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
