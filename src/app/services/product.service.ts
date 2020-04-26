import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = `${environment.apiUrl}/product`;
  handleError: any;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = this.httpErrorHandler.createHandleError('ProductService')

  }

  // httpOption = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${localStorage.getItem('token')}`
  //   })
  // };

  getProducts() {
    return this.http.get(`${this.apiUrl}`).pipe(catchError(this.handleError('getProducts', null)))
  }
}
