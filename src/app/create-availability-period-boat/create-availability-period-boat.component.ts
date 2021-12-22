import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-availability-period-boat',
  templateUrl: './create-availability-period-boat.component.html',
  styleUrls: ['./create-availability-period-boat.component.scss']
})
export class CreateAvailabilityPeriodBoatComponent implements OnInit {

  form: FormGroup;
  boat: any;
  id: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.form = this.formBuilder.group({
      dateTo: ['', Validators.required],
      dateFrom: ['', Validators.required],
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    });


   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.api.createBoatAvailabilityPeriod({
      houseId: parseInt(this.id),
      dateTo: this.form.get('dateTo')?.value,
      dateFrom: this.form.get('dateFrom')?.value,
    }).subscribe((response: any) => {
      this.router.navigate(['/boatView']);
    })
  }

}
