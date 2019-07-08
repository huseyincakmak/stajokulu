import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PersonServiceService} from "../person-service.service";

@Component({
  selector: 'app-my-left-pane',
  templateUrl: './my-left-pane.component.html',
  styleUrls: ['./my-left-pane.component.css']
})
export class MyLeftPaneComponent implements OnInit {

  public personList: any;

  @Output() selectedPersonChange = new EventEmitter<any>();

  constructor(private personService: PersonServiceService) {
    this.personService.personListSource$
      .subscribe(response => {
        this.personList = response
      })
  }

  ngOnInit() {

    this.personService.getAllPerson()
      .subscribe(data => {
        this.personList = data;
      })

  }

  onSelectPerson(person) {
    this.selectedPersonChange.emit(person);
  }

  onSelectPersonService(person) {
    this.personService.changeSelectedPerson(person);
  }

}
