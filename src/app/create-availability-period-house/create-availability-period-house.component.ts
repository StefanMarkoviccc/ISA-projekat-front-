import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-availability-period-house',
  templateUrl: './create-availability-period-house.component.html',
  styleUrls: ['./create-availability-period-house.component.scss']
})
export class CreateAvailabilityPeriodHouseComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {
    this.form = this.formBuilder.group({
      avaliabilityPeriod: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit() {

  }

}