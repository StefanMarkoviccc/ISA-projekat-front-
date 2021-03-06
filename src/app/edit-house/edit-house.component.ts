import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.scss']
})
export class EditHouseComponent implements OnInit {

  form: FormGroup;
  house: any;
  id: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {
  this.form = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      geographicalWidth: ['', Validators.required],
      geographicalLength: ['', Validators.required],
      description: ['', Validators.required],
      rulesOfConduct: ['', Validators.required],
      numberOfRooms: ['', Validators.required],
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
    });


    this.api.getHouse({id:this.id}).subscribe((response: any) => {

      console.log(response);
  
      this.form = this.formBuilder.group({
        name: [response.name, Validators.required],
        address: [response.address, Validators.required],
        geographicalWidth: [response.geographicalWidth, Validators.required],
        geographicalLength: [response.geographicalLength, Validators.required],
        description: [response.description, Validators.required],
        rulesOfConduct: [response.rulesOfConduct, Validators.required],
        numberOfRooms: [response.numberOfRooms, Validators.required],
      });
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {

    this.api.editHouse({
        id: this.id,
        name: this.form.get('name')?.value,
        address: this.form.get('address')?.value,
        geographicalWidth: this.form.get('geographicalWidth')?.value,
        geographicalLength: this.form.get('geographicalLength')?.value,
        description: this.form.get('description')?.value,
        rulesOfConduct: this.form.get('rulesOfConduct')?.value,
        numberOfRooms: this.form.get('numberOfRooms')?.value,
      }).subscribe((response: any) => {
        this.router.navigate(['/houseView']);
      })
  }
  
}
