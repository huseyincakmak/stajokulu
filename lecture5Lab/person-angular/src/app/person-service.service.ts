import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  public url = 'http://localhost:8080/person';

  constructor(public http: HttpClient) { }

  getAllPerson() {
    return this.http.get(this.url);
  }

  postPerson(person) {
   return this.http.post(this.url, person);
  }

  deletePerson(id) {
   return this.http.delete(this.url + '/' + id);
  }


}
