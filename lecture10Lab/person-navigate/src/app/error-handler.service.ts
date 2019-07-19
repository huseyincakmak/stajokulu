import {ErrorHandler, Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService extends ErrorHandler{

  constructor(private loginService: LoginService) {
    super();
  }

  handleError(error: Error) {
    console.log(error);
  }

}
