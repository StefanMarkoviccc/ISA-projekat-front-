import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adventure-reservation',
  templateUrl: './adventure-reservation.component.html',
  styleUrls: ['./adventure-reservation.component.scss']
})
export class AdventureReservationComponent implements OnInit {

  form: FormGroup;
  selectedAdventure: any;
  isAction: any;

  constructor(private formBuilder: FormBuilder) {
    this.form=this.formBuilder.group({
      adventure: ['',Validators.required],
      date: ['', Validators.required],
      place: ['', Validators.required],
      duration: ['', Validators.required],
      maxPersons: ['', Validators.required],
      price: ['', Validators.required],
      additionalServices: ['', Validators.required],
      isAction: ['', Validators.required]
    });
   }
  ngOnInit(): void {
  }

  onSubmit() {

  }
}
