import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-house-booking-history',
  templateUrl: './house-booking-history.component.html',
  styleUrls: ['./house-booking-history.component.scss']
})
export class HouseBookingHistoryComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) 
  {
    this.form = this.formBuilder.group({
     
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {}
}
