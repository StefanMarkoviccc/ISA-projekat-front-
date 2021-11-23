import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

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

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      geographicalWidth: ['', Validators.required],
      geographicalLength: ['', Validators.required],
      description: ['', Validators.required],
      rulesOfConduct: ['', Validators.required],
      numberOfRooms: ['', Validators.required],
    });

   }

  ngOnInit(): void {
  }

  onSubmit() {

    this.api.createHouse({
        name: this.form.get('name')?.value,
        address: this.form.get('address')?.value,
        geographicalWidth: this.form.get('geographicalWidth')?.value,
        geographicalLength: this.form.get('geographicalLength')?.value,
        description: this.form.get('description')?.value,
        rulesOfConduct: this.form.get('rulesOfConduct')?.value,
        numberOfRooms: this.form.get('numberOfRooms')?.value,
      }).subscribe((response: any) => {
        this.router.navigate(['/']);
      })
  }

}
