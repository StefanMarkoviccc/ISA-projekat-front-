import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-house-availability-period',
  templateUrl: './house-availability-period.component.html',
  styleUrls: ['./house-availability-period.component.scss']
})
export class HouseAvailabilityPeriodComponent implements OnInit {

  form: FormGroup;
  house: any;
  id: any;
  isTaken: any;
  showMessage: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.form = this.formBuilder.group({
      dateTo: ['', Validators.required],
      dateFrom: ['', Validators.required],
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    });

    this.showMessage = false;

   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.api.createHouseAvailabilityPeriod({
      houseId: parseInt(this.id),
      dateTo: this.form.get('dateTo')?.value,
      dateFrom: this.form.get('dateFrom')?.value,
    }).subscribe((response: any) => {

      this.router.navigate(['/houseView']);
      
    }, (error: any) => {
      this.showMessage = true;
    })

  }
}
