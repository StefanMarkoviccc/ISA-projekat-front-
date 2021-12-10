import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-instructor-services',
  templateUrl: './edit-instructor-services.component.html',
  styleUrls: ['./edit-instructor-services.component.scss']
})
export class EditInstructorServicesComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {
    this.form = this.formBuilder.group({
      name: ['',Validators.required],
      address: ['',Validators.required],
      langitude: ['',Validators.required],
      longitude: ['',Validators.required],
      description: ['',Validators.required],
      biography: ['',Validators.required],
      adventurePictures: ['',Validators.required],
      maxPersons: ['',Validators.required],
      date: ['',Validators.required],
      rules: ['',Validators.required],
      fishingEquipment: ['',Validators.required],
      cancelationPercent: ['',Validators.required],
      location: ['',Validators.required],
      standing: ['',Validators.required],
      additionalServices: ['',Validators.required],
      price: ['',Validators.required]
     });

     this.api.getInstuctorServices({id:1}).subscribe((response: any) => {
       
      this.form = this.formBuilder.group({
        name: [response.name,Validators.required],
        address: [response.type,Validators.required],
        langitude: [response.length,Validators.required],
        longitude: [response.engineNumber,Validators.required],
        description: [response.enginePower,Validators.required],
        biography: [response.maxSpeed,Validators.required],
        adventurePictures: [response.address,Validators.required],
        maxPersons: [response.promotionalDescription,Validators.required],
        date: [response.capacity,Validators.required],
        rules: [response.rulesOfConduct,Validators.required],
        fishingEquipment: [response.fishingEquipment,Validators.required],
        cancelationPercent: [response.promotionalDescription,Validators.required],
        location: [response.capacity,Validators.required],
        standing: [response.rulesOfConduct,Validators.required],
        additionalServices: [response.fishingEquipment,Validators.required],
        price: [response.fishingEquipment,Validators.required]
      });
     });
   }

  ngOnInit(): void {
  }
  onSubmit() {

    this.api.editInstructorServices({
      name: this.form.get('name')?.value,
      address: this.form.get('address')?.value,
      langitude: this.form.get('langitude')?.value,
      longitude: this.form.get('longitude')?.value,
      description: this.form.get('description')?.value,
      biography: this.form.get('biography')?.value,
      adventurePictures: this.form.get('adventurePictures')?.value,
      maxPersons: this.form.get('maxPersons')?.value,
      date: this.form.get('date')?.value,
      rules: this.form.get('rules')?.value,
      fishingEquipment: this.form.get('fishingEquipment')?.value,
      cancelationPercent: this.form.get('cancelationPercent')?.value,
      location: this.form.get('location')?.value,
      standing: this.form.get('standing')?.value,
      additionalServices: this.form.get('additionalServices')?.value,
      price: this.form.get('price')?.value,
    }).subscribe((response: any) => {
      this.router.navigate(['/']);
    })
  }
}