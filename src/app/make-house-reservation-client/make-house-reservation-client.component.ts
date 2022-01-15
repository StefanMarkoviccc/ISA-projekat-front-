import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-make-house-reservation-client',
  templateUrl: './make-house-reservation-client.component.html',
  styleUrls: ['./make-house-reservation-client.component.scss']
})
export class MakeHouseReservationClientComponent implements OnInit {

  form: FormGroup;
  selectedRoom: any;

  rooms: any;
  id: any;
  dateFrom: any;
  dateTo: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router,private activatedRoute: ActivatedRoute) {
    this.form = this.formBuilder.group({
      room: ['', Validators.required],
      date: ['', Validators.required],
      duration: ['', Validators.required],
      maxPersons: ['', Validators.required],
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    });


    this.rooms = [];

   }

  ngOnInit(): void {

    this.rooms = [];
    console.log(this.id)

    this.api.getRoomsForHouse({
      id:  parseInt(this.id)
    }).subscribe((response: any) => {
      this.rooms = response;
    })


  }

  onSubmit() {

    console.log(this.selectedRoom)

    this.api.createAppointment({
      houseId: parseInt(this.id),
      roomId: parseInt(this.selectedRoom),
      date: this.form.get('date')?.value,
      duration: this.form.get('duration')?.value,
      maxPersons: this.form.get('maxPersons')?.value,

    }).subscribe((response: any) => {
      this.router.navigate(['/client-home-page']);
    })
  }
}
