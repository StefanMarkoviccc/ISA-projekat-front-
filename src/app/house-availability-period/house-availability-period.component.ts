import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-house-availability-period',
  templateUrl: './house-availability-period.component.html',
  styleUrls: ['./house-availability-period.component.scss']
})
export class HouseAvailabilityPeriodComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {
    this.form = this.formBuilder.group({
      dateTo: ['', Validators.required],
      dateFrom: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
