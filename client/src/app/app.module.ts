import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserService } from './user/user.service';
import { UserLogoutComponent } from './user/user-logout/user-logout.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentNewComponent } from './appointment/appointment-new/appointment-new.component';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import { AppointmentService } from './appointment/appointment.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserNewComponent,
    UserLogoutComponent,
    AppointmentComponent,
    AppointmentNewComponent,
    AppointmentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService, AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
