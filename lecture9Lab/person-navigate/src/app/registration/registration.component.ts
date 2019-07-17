import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public modalVisible = false;
  public modalVisibleAnimate = false;

  constructor(private router: Router,
              private loginService: LoginService) { }

  ngOnInit() {
  }

  signUp(formValue, modal) {

    this.loginService.signUp(formValue)
        .subscribe(response => {
          modal.show();
        },error=> {

        });
  }
  registrationCallback() {

    console.log('Hello dude :)');

    this.router.navigate(['login']);

  }

  closeModal(modal) {
    modal.hide(this.registrationCallback.bind(this));
  }

}
