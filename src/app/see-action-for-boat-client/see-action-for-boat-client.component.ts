import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-see-action-for-boat-client',
  templateUrl: './see-action-for-boat-client.component.html',
  styleUrls: ['./see-action-for-boat-client.component.scss']
})
export class SeeActionForBoatClientComponent implements OnInit {

  form: FormGroup
  boatAppointments: any;
  userId : any;

  id: any;


  constructor(private formBuilder: FormBuilder, private api: ApiService, private activatedRoute: ActivatedRoute, private router: Router) 
  {
    
    this.form = this.formBuilder.group({
     
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
    });

    this.getActions();
    
  }

  ngOnInit(): void {
    this.getActions();
  }

  getActions(){
    this.api.getActionForBoat({
      id: parseInt(this.id),
    }).subscribe((response: any) => {
      this.boatAppointments = response;
    })
  }

  onSubmit() {
  }

}
