import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-boat-view',
  templateUrl: './boat-view.component.html',
  styleUrls: ['./boat-view.component.scss']
})
export class BoatViewComponent implements OnInit {

  form: FormGroup
  boats: any

  constructor(private formBuilder: FormBuilder, private api : ApiService) 
  {
    this.form = this.formBuilder.group({
      search: ['']
    });

    this.api.getBoat({id:1}).subscribe((response: any) => {

      this.form = this.formBuilder.group({

    });
  });
  }

  ngOnInit(): void {
    this.getBoats();
  }

  getBoats() {

    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''

    this.api.getBoats({search: search}).subscribe((response: any) => {
      this.boats = response;
    })
  }

  onSubmit() {
    this.getBoats();
  }
}
