import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-disable-account-request-page',
  templateUrl: './disable-account-request-page.component.html',
  styleUrls: ['./disable-account-request-page.component.scss']
})
export class DisableAccountRequestPageComponent implements OnInit {

  form : FormGroup
  userId: any
  user: any

  constructor(private formBuilder: FormBuilder,  private api: ApiService, private activatedRoute: ActivatedRoute,private router: Router) {

    this.form = this.formBuilder.group({
      text : [" ", Validators.required]
    })

    this.activatedRoute.queryParams.subscribe(params => {
      this.userId = params['userId'];

   });
  }
  
  

  ngOnInit(): void {
  }

  onSubmit(){
    this.api.sendRequestToDisableAcc({
      userId: parseInt(this.userId),
      text: this.form.get('text')?.value,
    }).subscribe((response: any) => {
      this.router.navigate(['/client-home-page'])
    });
  } 

}
