import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-client-reservation-page',
  templateUrl: './client-reservation-page.component.html',
  styleUrls: ['./client-reservation-page.component.scss']
})
export class ClientReservationPageComponent implements OnInit {
  form: FormGroup;
  selectedType: any;
  id : any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router,  private activatedRoute: ActivatedRoute) {
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required ],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      userType: ['', Validators.required],
      description: ['', Validators.required]})

      this.form = this.formBuilder.group({
        dateTo: ['', Validators.required],
        dateFrom: ['', Validators.required],
      });

      this.activatedRoute.queryParams.subscribe(params => {
        this.id = params['id'];
        console.log(this.id)
      });
   }

  ngOnInit(): void {
  }

  onSubmit() {

    console.log('Test', this.selectedType);

    if(this.selectedType === 'HOUSE_OWNER') {
      this.api.houseOwnerRegistration({
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
        posswordConformation : this.form.get('passwordConformation')?.value,
        firstName: this.form.get('firstName')?.value,
        lastName: this.form.get('lastName')?.value,
        address: this.form.get('address')?.value,
        city: this.form.get('city')?.value,
        country: this.form.get('country')?.value,
        phoneNumber: this.form.get('phoneNumber')?.value,
        userType: this.selectedType,
        description: this.form.get('description')?.value
      }).subscribe((response: any) => {
        this.router.navigate(['/home']);
      })
    }else if(this.selectedType === 'BOAT_OWNER'){
      this.api.boatOwnerRegistration({
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
        posswordConformation : this.form.get('passwordConformation')?.value,
        firstName: this.form.get('firstName')?.value,
        lastName: this.form.get('lastName')?.value,
        address: this.form.get('address')?.value,
        city: this.form.get('city')?.value,
        country: this.form.get('country')?.value,
        phoneNumber: this.form.get('phoneNumber')?.value,
        userType: this.selectedType,
        description: this.form.get('description')?.value,
        }).subscribe((response: any) => {
        this.router.navigate(['/home']);
      })
    }else if(this.selectedType === 'FISHING_INSTRUCTOR'){
      this.api.fishingInstructorRegistration({
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
        posswordConformation : this.form.get('passwordConformation')?.value,
        firstName: this.form.get('firstName')?.value,
        lastName: this.form.get('lastName')?.value,
        address: this.form.get('address')?.value,
        city: this.form.get('city')?.value,
        country: this.form.get('country')?.value,
        phoneNumber: this.form.get('phoneNumber')?.value,
        userType: this.selectedType,
        description: this.form.get('description')?.value,
        }).subscribe((response: any) => {
        this.router.navigate(['/home']);
      })
    }else{
      this.api.clientRegistration({
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
        posswordConformation : this.form.get('passwordConformation')?.value,
        firstName: this.form.get('firstName')?.value,
        lastName: this.form.get('lastName')?.value,
        address: this.form.get('address')?.value,
        city: this.form.get('city')?.value,
        country: this.form.get('country')?.value,
        phoneNumber: this.form.get('phoneNumber')?.value,
        userType: this.selectedType,
        description: this.form.get('description')?.value,

        dateTo: this.form.get('dateTo')?.value,
      dateFrom: this.form.get('dateFrom')?.value,

        }).subscribe((response: any) => {
        this.router.navigate(['/home']);
      })
  
    
    }
  }
}