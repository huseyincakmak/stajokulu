import { Component, OnInit } from '@angular/core';
import {PersonService} from '../person.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  public person: any = {
    id: 0,

  };

  constructor(private personService: PersonService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.personService.getPersonById(id)
      .subscribe(resp => {
        this.person = resp;
      });
  }

  updatePerson() {
    this.personService.updatePerson(this.person)
      .subscribe( asdf => {
        this.router.navigate(['person-list']);
      });
  }
}
