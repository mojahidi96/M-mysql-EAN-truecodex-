import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HandlerError, HttpErrorHandlerService } from './http-error-handler.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = this.httpErrorHandler.createHandleError('UsersService')
  }
  private apiUrl = `${environment.apiUrl}/users`;
  private handleError: HandlerError;

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getUsers() {
    return this.http.get(`${this.apiUrl}`).pipe(catchError(this.handleError('getUsers', null)))
  }

}
