import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-see-reservations-client',
  templateUrl: './see-reservations-client.component.html',
  styleUrls: ['./see-reservations-client.component.scss']
})
export class SeeReservationsClientComponent implements OnInit {

  form: FormGroup
  appointments: any;
  userId : any;
  appointmetId: any;


  constructor(private formBuilder: FormBuilder, private api: ApiService, private activatedRoute: ActivatedRoute, private router: Router) 
  {
    
    this.form = this.formBuilder.group({
      search: ['']
    });

    
  }

  ngOnInit(): void {
    this.getAppointmentsByUser();
    
  }


  getAppointmentsByUser() {

    this.api.getCurrentUser().subscribe((response: any) => {
      localStorage.setItem('user', JSON.stringify(response));

      this.userId = response.id;
      console.log(this.userId);


 
      this.api.getAppointmentsByUser({
        id: parseInt(this.userId),
      }).subscribe((response: any) => {
        this.appointments = response;
      })
      console.log(this.userId);
    });
    
      
  }

  onSubmit() {
  }

}
