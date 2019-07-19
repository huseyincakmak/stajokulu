import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://localhost:8080/login';
  private registrationUrl = 'http://localhost:8080/registration';


  public loginExist = new Subject<any>();
  public loginExist$ = this.loginExist.asObservable();

  setLoginExists(loginExists) {
    this.loginExist.next(loginExists);
  }


  constructor(private http: HttpClient) { }

  tryLogin(username: any, password: any) {
    const loginDto: any = {
      username: username,
      password: password
    };
    return this.http.get(this.loginUrl, loginDto);
  }

  oauthLogin(username: any, password: any)
  {
    const newLoginUrl = 'http://localhost:8080/oauth/token?grant_type=password&username='+username+'&password='+password;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic c3Rham9rdWx1OjEyMzQ1Ng=='
      })
    };

    return this.http.get(newLoginUrl, httpOptions);
  }

  logout() {
    const logoutUrl = 'http://localhost:8080/my-logout';
    return this.http.get(logoutUrl);
  }

  signUp(signUpDto){
    return this.http.post(this.registrationUrl, signUpDto);
  }
}
