import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { id } from 'date-fns/locale';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) 
  {
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {

      this.api.login({
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
      }).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem('token', response.token)

        this.api.getCurrentUser().subscribe((response: any) => {
          localStorage.setItem('user', JSON.stringify(response));

          if(response.userType == "HOUSE_OWNER") {
              this.router.navigate(['/house-owner-home-page']);
          }
          else if(response.userType == "BOAT_OWNER") {
            this.router.navigate(['/boat-owner-home-page']);
          }
          else if(response.userType == "FISHING_INSTRUCTOR") {
            this.router.navigate(['/instructor-home-page']);
          }
          else if(response.userType == "CLIENT"){
            this.router.navigate(['/client-home-page']);
          }else if(response.userType == "ADMINISTRATOR") {
            this.router.navigate(['/admin-home-page']);
          }
        });
      });
    
    }
  }

