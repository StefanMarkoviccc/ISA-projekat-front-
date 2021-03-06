import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit {

  form: FormGroup
  appointments: any;
  id: any;
  userId: any;
  user: any;
  isFinished: any;
  appontmentId: any;
  appointement: any;


  constructor(private formBuilder: FormBuilder, private api: ApiService, private activatedRoute: ActivatedRoute) 
  {
    
    this.form = this.formBuilder.group({

    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    
    this.appointments = [];

   this.isFinished=false;
  }

  ngOnInit(): void {
    this.appointments = [];
    this.getAppointmentsByHouse();
    
  }


  getAppointmentsByHouse() { 
      this.api.getAppointmentsByHouse({
        id: parseInt(this.id),
      }).subscribe((response: any) => {
        this.appointments = response;
      });   
  }

  onSubmit() {
    this.getAppointmentsByHouse();
  }

}
