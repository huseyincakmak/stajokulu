import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url = 'http://localhost:8080/person';

  constructor(private http: HttpClient) { }

  getPersonList() {

    return this.http.get(this.url);
  }

  updatePerson(person) {
    return this.http.put(this.url, person);
  }

  getPersonById(id) {
    return this.http.get(this.url + '/' + id);
  }
}
