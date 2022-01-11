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

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.form = this.formBuilder.group({
      room: ['', Validators.required],
      dateTo: ['', Validators.required],
      dateFrom: ['', Validators.required],
      price: ['', Validators.required],

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
    this.api.createActionHouse({
      houseId: parseInt(this.id),
      roomId: parseInt(this.selectedRoom),
      dateTo: this.form.get('dateTo')?.value,
      dateFrom: this.form.get('dateFrom')?.value,
      price: this.form.get('price')?.value
    }).subscribe((response: any) => {
      this.router.navigate(['/houseView']);
    })
  }

}
