import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.scss']
})
export class CreateHouseComponent implements OnInit {

  form: FormGroup;
  selectedRoom: any;
  selectedAppointment: any;
  selectedPriceList: any;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      geographicalWidth: ['', Validators.required],
      geographicalLength: ['', Validators.required],
      description: ['', Validators.required],
      rulesOfConduct: ['', Validators.required],
      numberOfRooms: ['', Validators.required],
      room: ['', Validators.required],
      appointement: ['', Validators.required],
      priceList: ['', Validators.required]
    });

   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
