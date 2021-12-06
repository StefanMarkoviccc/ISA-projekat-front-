import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {


    
    }
  }

