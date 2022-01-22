import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-boat-appointment',
  templateUrl: './create-boat-appointment.component.html',
  styleUrls: ['./create-boat-appointment.component.scss']
})
export class CreateBoatAppointmentComponent implements OnInit {

  form: FormGroup;
  selectedBoat: any;
  isAction: any;
  id: any;
  users: any;
  clientId: any;
  selectedUser: any;
  showMessage: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router,private activatedRoute: ActivatedRoute) {
    this.form = this.formBuilder.group({
      additionalServices: ['', Validators.required],
      user: ['', Validators.required],
      date: ['', Validators.required],
      duration: ['', Validators.required],
      maxPersons: ['', Validators.required],
      price: ['', Validators.required],
      isAction: ['', Validators.required],
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    });

    this.showMessage = false;

    
    this.users= [];

   }

  ngOnInit(): void {
    this.api.getClients({
  
    }).subscribe((response: any) => {
        this.users=response;
    })

    console.log(this.users);

  }

  onSubmit() {

    console.log(this.selectedUser);

    this.api.createBoatAppointment({
      boatId: parseInt(this.id),
      clientId: parseInt(this.selectedUser),
      additionalServices: this.form.get('additionalServices')?.value,
      date: this.form.get('date')?.value,
      duration: this.form.get('duration')?.value,
      maxPersons: this.form.get('maxPersons')?.value,
      price: this.form.get('price')?.value,
    }).subscribe((response: any) => {
      this.router.navigate(['/boat-owner-home-page']);
    }, (error: any) => {
      this.showMessage = true;
    });

  }
}
