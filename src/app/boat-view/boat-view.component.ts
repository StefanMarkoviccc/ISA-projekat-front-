import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-boat-view',
  templateUrl: './boat-view.component.html',
  styleUrls: ['./boat-view.component.scss']
})
export class BoatViewComponent implements OnInit {

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
