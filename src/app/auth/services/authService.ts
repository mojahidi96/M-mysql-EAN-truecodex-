import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { catchError } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { HandlerError, HttpErrorHandlerService } from 'src/app/services/http-error-handler.service';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = `${environment.apiUrl}/auth`;
    private handleError: HandlerError;

    httpOption = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandlerService) {
        this.handleError = this.httpErrorHandler.createHandleError('AuthService');
    }

    signup(data: User) {
        return this.http.post(`${this.apiUrl}/signup`, data, this.httpOption).pipe(
            catchError(this.handleError('signup', null))
        )
    }
}