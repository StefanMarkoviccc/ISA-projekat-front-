import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent implements OnInit {

  form: FormGroup
  id: any;
  user: any;
  users: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, 
    private router: Router, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
    });

        
    this.form = this.formBuilder.group({
  
    });

      this.users=[];
   }

   getUser() {

    this.api.getUser({id: this.id}).subscribe((response: any) => {
      this.user = response;
        })

    
  }

  getUsers(){
    this.api.getClients({}).subscribe((response: any) => {
      this.users=[response]
    })
  }

  ngOnInit(): void {
    this.getUser();
    }

}
