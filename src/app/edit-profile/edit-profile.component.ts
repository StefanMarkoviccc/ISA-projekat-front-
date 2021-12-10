import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  
  selectedType: any;
  form: FormGroup;
  user:any;
  
  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required ],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      userType: ['', Validators.required],
      description: ['', Validators.required]
    });

    let jsonUser = localStorage.getItem('user');

    if(jsonUser) {
      this.user = JSON.parse(jsonUser);
    }

    if(!this.user) {
      return;
    }

    this.api.getUser({id:this.user.id}).subscribe((response: any) => {

      console.log(response);

      this.form = this.formBuilder.group({
      email: [response.email, Validators.email],
      firstName: [response.firstName, Validators.required],
      lastName: [response.lastName, Validators.required ],
      address: [response.address, Validators.required],
      city: [response.city, Validators.required],
      country: [response.country, Validators.required],
      phoneNumber: [response.phoneNumber, Validators.required],
      userType: [response.userType, Validators.required],
      description: [response.description, Validators.required]
    });
  });  
  
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.api.editProfile({
      id: this.user.id,
      email: this.form.get('email')?.value,
      firstName: this.form.get('firstName')?.value,
      lastName: this.form.get('lastName')?.value,
      address: this.form.get('address')?.value,
      city: this.form.get('city')?.value,
      conutry: this.form.get('country')?.value,
      phoneNumber: this.form.get('phoneNumber')?.value,
      userType: this.form.get('userType')?.value,
      description: this.form.get('description')?.value,
    }).subscribe((response: any) => {
      this.router.navigate(['/client-home-page']);
    })
  }
}
