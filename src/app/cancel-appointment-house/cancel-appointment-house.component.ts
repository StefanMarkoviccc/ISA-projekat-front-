import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-cancel-appointment-house',
  templateUrl: './cancel-appointment-house.component.html',
  styleUrls: ['./cancel-appointment-house.component.scss']
})
export class CancelAppointmentHouseComponent implements OnInit {

  form: FormGroup
  id : any;
  appointment: any;


  constructor(private formBuilder: FormBuilder, private api: ApiService, private activatedRoute: ActivatedRoute, private router: Router) 
  {
    
    this.form = this.formBuilder.group({
      search: ['']
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    });

    this.getAppointement();
    
  }

  ngOnInit(): void {
    this.getAppointement();
  }

  getAppointement(){
    this.api.getAppointment({id: this.id}).subscribe((response: any) => {
      this.appointment = [response];
    })

  }

  onSubmit() {
    console.log(this.id);
      this.api.deleteAppointmentHouse({
        id: parseInt(this.id),
      }).subscribe((response: any) => {
        this.router.navigate(['/see-reservations-client']);
      })
  }

}
