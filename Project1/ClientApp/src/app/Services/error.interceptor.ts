import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          let errorMsg = '';
          if (err.error instanceof ErrorEvent) {
            console.log('This is client side error');
            errorMsg = `Error: ${err.error.message}`;
          } else {
            console.log('This is server side error');
            errorMsg = `Error Code: ${err.status},  Message: ${err.message}`;
          }
          console.log(errorMsg);
          return throwError(() => new Error("Something is wrong, please try later"));
        })
      )
  }
}
