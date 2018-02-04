import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment-new',
  templateUrl: './appointment-new.component.html',
  styleUrls: ['./appointment-new.component.css']
})
export class AppointmentNewComponent implements OnInit {
  appointment: Appointment;
  errors;

  currentDate: string;

  constructor(private _appointmentService: AppointmentService, private _router: Router) { }

  ngOnInit() {
    this.appointment = new Appointment();
    this.currentDate = new Date().toISOString().substr(0, 10);
  }

  onSubmit() {
    this._appointmentService.createAppointment(this.appointment,
      (appointment) => { this._router.navigate(['/dashboard']); },
      (err) => { 
        console.log('errors:', err);
        this.errors = err.message;
      }
    );

  }

}
