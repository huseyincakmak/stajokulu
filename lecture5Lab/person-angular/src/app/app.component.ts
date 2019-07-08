import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public person : any = {
    id: 8,
    name: 'Bran',
    surname: 'Stark'
  };

  title = 'Staj Okulu Page';

  onChangeSelectedPerson(p) {
    this.person = p;
  }
}
