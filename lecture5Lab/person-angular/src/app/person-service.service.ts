import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  public url = 'http://localhost:8080/person';
  private selectedPersonSource = new Subject<any>();
  selectedPersonSource$ = this.selectedPersonSource.asObservable();

  private personListSource = new Subject<any>();
  personListSource$ = this.personListSource.asObservable();

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

  changeSelectedPerson(person) {
    this.selectedPersonSource.next(person);
  }

  changePersonList(personList) {
    this.personListSource.next(personList);
  }

}
