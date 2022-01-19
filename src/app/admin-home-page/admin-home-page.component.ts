import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.scss']
})
export class AdminHomePageComponent implements OnInit {

  form : FormGroup

  constructor(private formBuilder: FormBuilder, private api : ApiService) {

    this.form = this.formBuilder.group({
    });

   }

  ngOnInit(): void {
  }


  onSubmit() {
  }
}
