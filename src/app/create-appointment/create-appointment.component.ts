import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss']
})
export class CreateAppointmentComponent implements OnInit {

  form: FormGroup;
  selectedRoom: any;
  selectedHouse: any;
  isAction: any;
  rooms: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {
    this.form = this.formBuilder.group({
      house: ['', Validators.required],
      room: ['', Validators.required],
      date: ['', Validators.required],
      duration: ['', Validators.required],
      maxPersons: ['', Validators.required],
      price: ['', Validators.required],
      isAction: ['', Validators.required]
    });
   }

  ngOnInit(): void {

    this.rooms = [];

    this.api.getAllRooms({

    }).subscribe((response: any) => {
      this.rooms = response;
    })

  }

  onSubmit() {

    this.api.createAppointment({
      house: this.form.get('name')?.value,
      room: this.form.get('room')?.value,
      date: this.form.get('date')?.value,
      duration: this.form.get('duration')?.value,
      maxPersons: this.form.get('maxPersons')?.value,
      price: this.form.get('price')?.value,
      isAction: this.form.get('isAction')?.value,
    }).subscribe((response: any) => {
      this.router.navigate(['/']);
    })
  }

}
