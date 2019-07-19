import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements  HttpInterceptor{

  intercept(req, next) {

    const isLogin = req.url.indexOf('oauth') > 0;
    const isRegistration = req.url.indexOf('registration') > 0;

    if(!isLogin && !isRegistration && localStorage.getItem('access_token')) {
      let tokenizedReq = req.clone({
        setHeaders: {
          Authorization: localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token')
        }
      });
      return next.handle(tokenizedReq);

    };

    return next.handle(req);

  }

  constructor() { }
}
