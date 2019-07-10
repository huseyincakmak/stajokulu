import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonService} from '../person.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  public personId;

  public  person: any;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private personService: PersonService) { }

  ngOnInit() {
    this.personId = this.activatedRoute.snapshot.paramMap.get('id');
    this.personService.getPersonById(this.personId)
      .subscribe(response => {
        this.person = response;
      });
  }

  updatePerson() {
    this.personService.updatePerson(this.person)
      .subscribe(response => {
        this.router.navigate(['person-list']);
      });
  }
}
