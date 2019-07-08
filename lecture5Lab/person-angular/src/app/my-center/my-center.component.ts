import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PersonServiceService} from "../person-service.service";

@Component({
  selector: 'app-my-center',
  templateUrl: './my-center.component.html',
  styleUrls: ['./my-center.component.css']
})
export class MyCenterComponent implements OnInit {

  public selectedPerson: any = {
    id: 5,
    name: 'deneme',
    surname: 'deeneme'
  };


  public personList: any;
  public myText = 'Hello Stajokulu';
  public myTwoWayBindedText = 'Hello';
  public gizleGoster = true;
  public buttonText = 'Gizle';

  public currentDate : Date = new Date();

  constructor(private personService: PersonServiceService) {
    personService.selectedPersonSource$.subscribe(
      response=> {
        console.log('person changed');
        this.selectedPerson= response;
      }
    )
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

  deletePerson(id) {
    this.personService.deletePerson(id)
      .subscribe(deleteResponse => {
          this.personService.getAllPerson()
            .subscribe(data => {
              this.personService.changePersonList(data);
            })
        }
      );
  }
}
