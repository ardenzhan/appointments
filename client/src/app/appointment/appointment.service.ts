import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { Http } from '@angular/http';

@Injectable()
export class AppointmentService {
  appointments: Appointment[];

  constructor(private _http: Http) {
    this.appointments = [];
  }

  

  createAppointment(appointment, callback, errorback) {
    this._http.post('/appointments', appointment).subscribe(
      (res) => {
        const appointment = res.json();
        this.appointments.push(appointment);
        callback(appointment);
      },
      (err) => { errorback(err.json()); }
    );
  }

  retrieveAppointments(callback, errorback) {
    this._http.get('/appointments').subscribe(
      (res) => {
        const appointments = res.json();
        this.appointments = appointments;
        callback(appointments);
      },
      (err) => { errorback(err.json()); }
    )
  }

  deleteAppointment(apptID, callback, errorback) {
    this._http.delete('/appointments/' + apptID).subscribe(
      (res) => { callback(res.json()); },
      (err) => { errorback(err.json()); }
    )
  }

}
