import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-boat-appointment',
  templateUrl: './create-boat-appointment.component.html',
  styleUrls: ['./create-boat-appointment.component.scss']
})
export class CreateBoatAppointmentComponent implements OnInit {

  form: FormGroup;
  selectedBoat: any;
  isAction: any;

  constructor(private formBuilder: FormBuilder) {
    this.form=this.formBuilder.group({
      boat: ['',Validators.required],
      date: ['', Validators.required],
      duration: ['', Validators.required],
      maxPersons: ['', Validators.required],
      price: ['', Validators.required],
      isAction: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
