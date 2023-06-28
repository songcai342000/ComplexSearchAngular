import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorInterceptor } from './error.interceptor';

@Injectable({
  providedIn: 'root'
})
export class InterceptorIndex {
 
}

export const InterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

]
