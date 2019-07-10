import { Component, OnInit } from '@angular/core';
import {PersonService} from '../person.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  public personList: any;

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit() {

    this.personService.getPersonList()
      .subscribe(
        response => {
          this.personList = response;
        }
      );
  }

  onSelectPerson(person) {
    this.router.navigate(['/person-detail/' + person.id]);
  }
}
