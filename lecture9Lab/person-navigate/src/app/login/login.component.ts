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

    this.loginService.oauthLogin(formValue.username, formValue.password)
      .subscribe(response => {

        if (response) {

            localStorage.setItem('access_token', response['access_token']);
            localStorage.setItem('token_type', response['token_type']);


          this.router.navigate(['person-list']);

        } else {
          console.log('Try Login Response Unsuccesful' );
          // TODO: Do something for fail case
        }

      });
  }

    navigateToSignup() {
        this.router.navigate(['registration']);
    }
}
