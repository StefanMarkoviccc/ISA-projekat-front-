import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.scss']
})
export class HouseViewComponent implements OnInit {

  form: FormGroup
  houses: any;
  startDate: any;
  endDate: any;
  user: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private activatedRoute: ActivatedRoute) 
  {
    
    this.form = this.formBuilder.group({
      search: ['']
    });
    let jsonUser = localStorage.getItem('user');

    if(jsonUser) {
      this.user = JSON.parse(jsonUser);
    }
  

  this.activatedRoute.queryParams.subscribe(params => {
    this.startDate = params['startDate'];
    this.endDate = params['endDate'];
  });

  }

  ngOnInit(): void {
    this.getHouses();
    
  }

  getHouses() {

    
    console.log(this.startDate)
    console.log(this.endDate)
    
    if(this.startDate && this.endDate) {
      this.api.searchByDate({startDate: new Date(this.startDate), endDate: new Date(this.endDate) }).subscribe((response: any) => {
        this.houses = response;
        
      })
    }
    else {
      let search = this.form.get('search')?.value ? this.form.get('search')?.value : '' 

      this.api.getHouses({search: search}).subscribe((response: any) => {
        this.houses = response;
      })
      
    }

  }

  onSubmit() {
    this.getHouses();
  }



}
