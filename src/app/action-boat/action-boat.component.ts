import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-action-boat',
  templateUrl: './action-boat.component.html',
  styleUrls: ['./action-boat.component.scss']
})
export class ActionBoatComponent implements OnInit {

  form: FormGroup;
  boatId: any;
  id: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.form = this.formBuilder.group({
      additionalServices: ['', Validators.required],
      dateTo: ['', Validators.required],
      dateFrom: ['', Validators.required],
      price: ['', Validators.required],

    });

    //NE POKUPI ID BRODA

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    });
   }

  ngOnInit(): void {
   }

  onSubmit() {

    console.log(this.id);

    this.api.createActionBoat({
      boatId: parseInt(this.id),
      dateTo: this.form.get('dateTo')?.value,
      dateFrom: this.form.get('dateFrom')?.value,
      price: this.form.get('price')?.value,
      additionalServices: this.form.get('additionalServices')?.value
    }).subscribe((response: any) => {
      this.router.navigate(['/boatView']);
    })

    
  }


}
