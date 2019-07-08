import {Component, Input, OnInit} from '@angular/core';
import {PersonServiceService} from "../person-service.service";

@Component({
  selector: 'app-my-center',
  templateUrl: './my-center.component.html',
  styleUrls: ['./my-center.component.css']
})
export class MyCenterComponent implements OnInit {

  @Input() selectedPerson:any;

  public selectedServicePerson = {
    id: '10',
    name: 'Tony',
    surname: 'Stark'
  };

  public myNumber: number  = 2.32352443542525;

  public myPercent: number = 0.25;

  public myMoney: number = 500.5;

  public myDate: Date = new Date();

  public personList: any;
  public myText = 'Hello Staj okulu';
  public myTwoWayBindedText = 'Hello';
  public gizleGoster = true;
  public buttonText = 'Gizle';

  constructor(private personService: PersonServiceService) {
    this.personService.selectedPersonSource$
      .subscribe(response => {
        this.selectedServicePerson = response;
      })
  }

  ngOnInit() {
    this.personService.getAllPerson()
      .subscribe(data => {
        this.personList = data;
      })
  }

  onClickSubmit(formData) {
    const serviceRequstObject = {
      id: formData.id,
      name: formData.name,
      surname: formData.surname
    }

    this.personService.postPerson(serviceRequstObject)
      .subscribe(postResponse => {
          this.personService.getAllPerson()
            .subscribe(data => {
              this.personService.changePersonList(data);
            })
        }
      );
  }

  gizleClick() {
    if (this.gizleGoster == true) {
      this.buttonText = 'Göster';
      this.gizleGoster = false;
    } else {
      this.buttonText = 'Gizle';
      this.gizleGoster = true;
    }
  }

  kaydiSil(id) {
    this.personService.deletePerson(id)
      .subscribe(deleteResponse => {
          this.personService.getAllPerson()
            .subscribe(data => {
              this.personList = data;
            })
        }
      );
  }
}
