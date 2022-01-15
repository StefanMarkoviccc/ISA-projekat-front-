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
  id: any;
  type: any;

  constructor(private formBuilder: FormBuilder,  private api: ApiService, private activatedRoute: ActivatedRoute,private router: Router) {

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      this.type = params['type'];
    });


    this.form = this.formBuilder.group({
      text : [" ", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

    this.api.failAComplain({
      id: this.id,
      type: this.type,
      text: this.form.get('text')?.value,    
    }).subscribe((response: any) => {
      this.router.navigate(['/client-home-page']);
    })

  }
}
