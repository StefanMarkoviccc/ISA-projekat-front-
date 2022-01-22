import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-complain-page',
  templateUrl: './complain-page.component.html',
  styleUrls: ['./complain-page.component.scss']
})
export class ComplainPageComponent implements OnInit {


  form : FormGroup
  houseId: any;
  type: any;
  showMessage: any;
  user: any;
  id: any;
  userId: any;

  constructor(private formBuilder: FormBuilder,  private api: ApiService, private activatedRoute: ActivatedRoute,private router: Router) {

    this.activatedRoute.queryParams.subscribe(params => {
      this.houseId = params['houseId'];
      this.type = params['type'];
    });


    this.form = this.formBuilder.group({
      text : [" ", Validators.required]
    })

    this.showMessage = false;

    let jsonUser = localStorage.getItem('user');

    if(jsonUser) {
      this.user = JSON.parse(jsonUser);
    }

    if(!this.user) {
      return;
    }

    this.api.getUser({id:this.user.id}).subscribe((response: any) => {

      console.log(response);
      this.userId = response.id;
  });  
  }

  ngOnInit(): void {
  }

  onSubmit() {
      console.log(this.houseId);
      console.log(this.type);

    this.api.failAComplain({
      complainType: parseInt(this.type),
      text: this.form.get('text')?.value,
      houseId: parseInt(this.houseId),
      userId: this.userId
    }).subscribe((response: any) => {
      this.router.navigate(['/client-home-page']); 
    }, (error: any) => {
      this.showMessage = true;
    })

  }
}
