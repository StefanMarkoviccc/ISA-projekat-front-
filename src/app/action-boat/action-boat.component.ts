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
  isAction: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.form = this.formBuilder.group({
      additionalServices: ['', Validators.required],
      date: ['', Validators.required],
      price: ['', Validators.required],
      duration:  ['', Validators.required],
      maxPersons: ['', Validators.required],

    });


    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    });

    this.isAction = true;
   }

  ngOnInit(): void {
   }

  onSubmit() {

    console.log(this.id);

    this.api.createActionBoat({
      boatId: parseInt(this.id),
      date: this.form.get('date')?.value,
      duration: this.form.get('duration')?.value,
      maxPersons: this.form.get('maxPersons')?.value,
      price: this.form.get('price')?.value,
      action: this.isAction,
      additionalServices: this.form.get('additionalServices')?.value
    }).subscribe((response: any) => {
      this.router.navigate(['/boatView']);
    })

    
  }


}
