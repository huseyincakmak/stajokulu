import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { ModalComponent } from './modal/modal.component';
import {TokenInterceptorService} from './token-interceptor.service';
import {ErrorHandlerService} from './error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PersonListComponent,
    PersonDetailComponent,
    RegistrationComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
      },
      {
        provide: ErrorHandler,
        useClass: ErrorHandlerService
      }
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
