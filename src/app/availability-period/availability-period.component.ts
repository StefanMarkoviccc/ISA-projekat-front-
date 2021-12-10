import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-availability-period',
  templateUrl: './availability-period.component.html',
  styleUrls: ['./availability-period.component.scss']
})
export class AvailabilityPeriodComponent implements OnInit {

  form: FormGroup;
  isAction: any;

  constructor(private formBuilder: FormBuilder) {
    this.form=this.formBuilder.group({
      date: ['', Validators.required]
    });
   }
  ngOnInit(): void {
  }

  onSubmit() {

  }
}
