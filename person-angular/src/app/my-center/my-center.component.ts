import { Component, OnInit } from '@angular/core';
import {PersonServiceService} from "../person-service.service";

@Component({
  selector: 'app-my-center',
  templateUrl: './my-center.component.html',
  styleUrls: ['./my-center.component.css']
})
export class MyCenterComponent implements OnInit {

  public personList: any;

  constructor(private personService:PersonServiceService) { }

  ngOnInit() {

      this.personService.getAllPerson()
        .subscribe( data => {
          this.personList = data;
        })
  }

}
