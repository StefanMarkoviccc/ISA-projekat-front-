import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-boat-owner-home-page',
  templateUrl: './boat-owner-home-page.component.html',
  styleUrls: ['./boat-owner-home-page.component.scss']
})
export class BoatOwnerHomePageComponent implements OnInit {

  
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
