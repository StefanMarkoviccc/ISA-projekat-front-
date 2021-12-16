import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-adventure',
  templateUrl: './add-adventure.component.html',
  styleUrls: ['./add-adventure.component.scss']
})
export class AddAdventureComponent implements OnInit {
  form: FormGroup;
  selectedType: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) 
  {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      description: ['', Validators.required],
      biography: ['', Validators.required],
      maxPersons: ['', Validators.required ],
      adventureAppointment: ['', Validators.required],
      rules: ['', Validators.required],
      fishingEquipment: ['', Validators.required],
      price: ['', Validators.required],
      isFreeCancelation: ['', Validators.required],
      cancelationPercent: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.api.createAdventure({
      name: this.form.get('name')?.value,
      address: this.form.get('address')?.value,
      description: this.form.get('description')?.value,
      biography: this.form.get('biography')?.value,
      maxPersons: parseInt(this.form.get('maxPersons')?.value),
      adventureAppointment: this.form.get('adventureAppointment')?.value,
      rules: this.form.get('rules')?.value,
      fishingEquipment: this.form.get('fishingEquipment')?.value,
      price: parseInt(this.form.get('price')?.value),
      isFreeCancelation: this.form.get('isFreeCancelation')?.value,
      cancelationPercent: parseInt(this.form.get('cancelationPercent')?.value),
    }).subscribe((response: any) => {
      this.router.navigate(['/instructor-home-page']);
    })
  }


}
