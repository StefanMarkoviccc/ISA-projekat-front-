import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {
    this.form = this.formBuilder.group({
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
   });

 }

ngOnInit(): void {
}

onSubmit() {


  this.api.changePassword({
    password: this.form.get('password')?.value,
  }).subscribe((response: any) => {
    this.router.navigate(['/login']);
  })
}
}
