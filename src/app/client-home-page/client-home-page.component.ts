import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-client-home-page',
  templateUrl: './client-home-page.component.html',
  styleUrls: ['./client-home-page.component.scss']
})
export class ClientHomePageComponent implements OnInit {

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
