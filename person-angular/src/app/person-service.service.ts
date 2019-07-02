import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor(public http: HttpClient) { }

  getAllPerson() {
    return this.http.get('http://localhost:8080/person');
  }
}
