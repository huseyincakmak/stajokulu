import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyLeftPaneComponent } from './my-left-pane/my-left-pane.component';
import { MyCenterComponent } from './my-center/my-center.component';
import { MyRightPaneComponent } from './my-right-pane/my-right-pane.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyLeftPaneComponent,
    MyCenterComponent,
    MyRightPaneComponent,
    MyFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
