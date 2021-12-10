import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-instructor-view',
  templateUrl: './instructor-view.component.html',
  styleUrls: ['./instructor-view.component.scss']
})
export class InstructorViewComponent implements OnInit {

  form: FormGroup
  adventures: any

  constructor(private formBuilder: FormBuilder, private api: ApiService) 
  {
    this.form = this.formBuilder.group({
      search: ['']
    });
  }

  ngOnInit(): void {
    this.getAdventures();
  }

  getAdventures() {
    this.api.getAdventures({search: ''}).subscribe((response: any) => {
      this.adventures = response;
    })
  }

  getInstructors(){
    
  }

  onSubmit() {
    this.getAdventures();
  }
}
