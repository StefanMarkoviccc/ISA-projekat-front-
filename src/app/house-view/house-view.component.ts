import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.scss']
})
export class HouseViewComponent implements OnInit {

  form: FormGroup
  houses: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService) 
  {
    this.form = this.formBuilder.group({
      search: ['']
    });
  }

  ngOnInit(): void {
    this.getHouses();
  }

  getHouses() {
    this.api.getHouses({search: ''}).subscribe((response: any) => {
      this.houses = response;
    })
  }

  onSubmit() {
    this.getHouses();
  }
}
