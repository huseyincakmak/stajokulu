import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements  HttpInterceptor{
  intercept(req, next) {
    /*
    if(localStorage.getItem('access_token')) {
      let tokenizedReq = req.clone({
        setHeaders: {
          Authorization: localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token')
        }
      });
      return next.handle(tokenizedReq);
    }
    */
    return next.handle(req);
  }

  constructor() { }
}
