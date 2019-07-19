import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {ErrorHandlerService} from './error-handler.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'StajOkulu demo project';

    public logoutVisible: boolean = false;

    constructor(private loginService: LoginService,
                private router: Router) {

        this.loginService.loginExist$.subscribe(response => {
            this.logoutVisible = response;
        })

    }

    ngOnInit(): void {
        if(localStorage.getItem('access_token') &&
            localStorage.getItem('access_token') !== 'undefined' &&
            localStorage.getItem('access_token') !== 'null')  {
            this.logoutVisible = true;
        }
    }

    logout() {
        this.loginService.logout()
            .subscribe(response => {
                this.logoutVisible = false;
                localStorage.setItem('access_token', null);
                localStorage.setItem('token_type', null);
                this.router.navigate(['login']);
            });
    }

}
