import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss']
})
export class CreateAppointmentComponent implements OnInit {

  form: FormGroup;
  selectedRoom: any;
  selectedHouse: any;
  isAction: any

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      house: ['', Validators.required],
      room: ['', Validators.required],
      date: ['', Validators.required],
      duration: ['', Validators.required],
      maxPersons: ['', Validators.required],
      price: ['', Validators.required],
      isAction: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
