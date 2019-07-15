import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8080/login';

  constructor(private http: HttpClient) { }

  tryLogin(username: any, password: any) {
    const loginDto: any = {
      username: username,
      password: password
    };
    return this.http.post(this.url, loginDto);
  }
}
