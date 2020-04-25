import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

export type HandlerError =
  <T>(operation?: string, resutl?: T) => (error: HttpErrorResponse) => Observable<T>;
@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {

  constructor(private messageService: MessageService) { }
  createHandleError = (serviceName = '') => <T>(operation = 'operaiton', result = {} as T) => this.handleError(serviceName, operation, result);

  handleError<T>(serviceName: string = '', operaiton: string = 'operaiton', result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      const message = (error.error instanceof ErrorEvent) ? error.error.message : `server returned code ${error.status} with body "${error.error}"`
      this.messageService.add(`${serviceName}:${operaiton} failed: ${message}`)
      return of(result);
    };
  }
}
