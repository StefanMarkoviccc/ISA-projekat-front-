import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss']
})
export class CreateAppointmentComponent implements OnInit {

  form: FormGroup;
  selectedRoom: any;
  isAction: any;
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
      price: ['', Validators.required],
      isAction: ['', Validators.required]
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    });


    this.rooms = [];

   }

  ngOnInit(): void {

    this.rooms = [];

    this.api.getAllRooms({

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
      price: this.form.get('price')?.value,
      isAction: this.form.get('isAction')?.value,
    }).subscribe((response: any) => {
      this.router.navigate(['/house-owner-home-page']);
    })

    //EMAIL SERVICE
    //CHECK BOX
    //DODATNE USLUGE
  }

}
