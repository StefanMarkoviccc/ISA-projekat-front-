import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-action-house',
  templateUrl: './action-house.component.html',
  styleUrls: ['./action-house.component.scss']
})
export class ActionHouseComponent implements OnInit {

  form: FormGroup;
  houseId: any;
  roomId: any;
  rooms: any;
  selectedRoom: any;
  id: any;
  isAction: any;
  clientId: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.form = this.formBuilder.group({
      room: ['', Validators.required],
      date: ['', Validators.required],
      price: ['', Validators.required],
      duration:  ['', Validators.required],
      maxPersons: ['', Validators.required],
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    });


    this.rooms = [];

    this.isAction = true;

   }

  ngOnInit(): void {

    this.rooms = [];

    this.api.getRoomsForHouse({
      id:  parseInt(this.id)
    }).subscribe((response: any) => {
      this.rooms = response;
    })


   }

  onSubmit() {

    console.log(this.form.get('maxPersons')?.value,
    )

    this.api.createAppointment({
      houseId: parseInt(this.id),
      roomId: parseInt(this.selectedRoom),
      date: this.form.get('date')?.value,
      duration: this.form.get('duration')?.value,
      maxPersons: this.form.get('maxPersons')?.value,
      price: this.form.get('price')?.value,
      action: this.isAction
    }).subscribe((response: any) => {
      this.router.navigate(['/houseView']);
    })

    
  }

}
