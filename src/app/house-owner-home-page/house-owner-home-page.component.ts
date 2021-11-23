import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-house-owner-home-page',
  templateUrl: './house-owner-home-page.component.html',
  styleUrls: ['./house-owner-home-page.component.scss']
})
export class HouseOwnerHomePageComponent implements OnInit {

  
  form: FormGroup

  constructor(private formBuilder: FormBuilder) 
  {
    this.form = this.formBuilder.group({
      search: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {}
}
