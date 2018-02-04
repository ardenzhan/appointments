import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointments: Appointment[];
  user: User = new User();

  constructor(private _userService: UserService, private _appointmentService: AppointmentService, private _router: Router) { }

  ngOnInit() {
    this._userService.getCurrentUser(
      (user) => {
        if (!user) return this._router.navigate(['/']);
        return this.user = user;
      },
      (err) => { console.log(err); }
    )

    this._appointmentService.retrieveAppointments(
      (appointments) => {
        this.appointments = appointments;
      },
      (err) => { console.log(err); }
    );
  }

  deleteAppointment(apptID) {
    this._appointmentService.deleteAppointment(apptID,
      (appointment) => {
        this._appointmentService.retrieveAppointments(
          (appointments) => {
            this.appointments = appointments;
            
          },
          (err) => { console.log(err); }
        );
      },
      (err) => { console.log(err); }
    );
  }

}
