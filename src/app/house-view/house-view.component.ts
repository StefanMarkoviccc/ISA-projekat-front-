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

    
    this.api.getHouse({id:1}).subscribe((response: any) => {

      this.form = this.formBuilder.group({

    });
  }); 

  }

  ngOnInit(): void {
    this.getHouses();
  }

  getHouses() {

    let search = this.form.get('search')?.value ? this.form.get('search')?.value : '' 

    this.api.getHouses({search: search}).subscribe((response: any) => {
      this.houses = response;
    })
  }

  onSubmit() {
    this.getHouses();
  }



}
