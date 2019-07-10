import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  tryLogin(formValue) {
    console.log('Try Login : ' + formValue.username);

    this.loginService.tryLogin(formValue.username, formValue.password)
      .subscribe(response => {
        console.log('Try Login Response ' );
        if (response === true) {
          console.log('Try Login Response Succesful' );
          this.router.navigate(['person-list']);
        } else {
          console.log('Try Login Response Succesful' );
          // TODO: Do something for fail case
        }
      });
  }
}
