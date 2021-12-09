import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-instructor-home-page',
  templateUrl: './instructor-home-page.component.html',
  styleUrls: ['./instructor-home-page.component.scss']
})
export class InstructorHomePageComponent implements OnInit {

  
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