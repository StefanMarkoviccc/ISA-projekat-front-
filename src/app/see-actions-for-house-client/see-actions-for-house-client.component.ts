import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-see-actions-for-house-client',
  templateUrl: './see-actions-for-house-client.component.html',
  styleUrls: ['./see-actions-for-house-client.component.scss']
})
export class SeeActionsForHouseClientComponent implements OnInit {
  form: FormGroup
  appointments: any;
  userId : any;
  appointmetId: any;
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
    this.api.getActionForHouse({
      id: parseInt(this.id),
    }).subscribe((response: any) => {
      this.appointments = response;
    })
  }

  onSubmit() {
  }

}
