import { Component, OnInit } from '@angular/core';
import {PersonService} from '../person.service';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  public personList;
  public logoutVisible: boolean = false;

  constructor(private personService: PersonService,
              private router: Router,
              private loginService: LoginService) {

  }

  ngOnInit() {
    this.personService.getPersonList()
      .subscribe(response => {
        this.personList = response;
      });
  }

  onSelectPerson(person) {
    this.router.navigate(['/person-detail/' + person.id]);
  }
}
