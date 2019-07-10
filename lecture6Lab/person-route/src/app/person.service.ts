import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url = 'http://localhost:8080/person';

  constructor(private http: HttpClient) { }

  getPersonList() {
    return this.http.get(this.url);
  }

  getPersonById(id) {
    return this.http.get(this.url + '/' + id);
  }

  updatePerson(person) {
    return this.http.put(this.url, person);
  }
}
