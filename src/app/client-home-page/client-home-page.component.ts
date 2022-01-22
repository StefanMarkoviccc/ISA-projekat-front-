import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-client-home-page',
  templateUrl: './client-home-page.component.html',
  styleUrls: ['./client-home-page.component.scss']
})
export class ClientHomePageComponent implements OnInit {

  form: FormGroup
  user: any
  userId: any

  constructor(private formBuilder: FormBuilder,  private api: ApiService, private activatedRoute: ActivatedRoute,private router: Router) 
  {
    this.form = this.formBuilder.group({
      search: ['']
    });

   
  }
  ngOnInit(): void {
    this.api.getCurrentUser().subscribe((response: any) => {
      localStorage.setItem('user', JSON.stringify(response));

      this.userId = response.id;

    });
  }
  onSubmit() {}
}
