import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-boat',
  templateUrl: './create-boat.component.html',
  styleUrls: ['./create-boat.component.scss']
})
export class CreateBoatComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {
    this.form = this.formBuilder.group({
      name: ['',Validators.required],
      type: ['',Validators.required],
      length: ['',Validators.required],
      engineNumber: ['',Validators.required],
      enginePower: ['',Validators.required],
      maxSpeed: ['',Validators.required],
      address: ['',Validators.required],
      promotionalDescription: ['',Validators.required],
      capacity: ['',Validators.required],
      rulesOfConduct: ['',Validators.required],
      fishingEquipment: ['',Validators.required]
     });
   }

  ngOnInit(): void {
  }

  onSubmit() {

    this.api.createBoat({
      name: this.form.get('name')?.value,
      type: this.form.get('type')?.value,
      length: this.form.get('length')?.value,
      engineNumber: this.form.get('engineNumber')?.value,
      enginePower: this.form.get('enginePower')?.value,
      maxSpeed: this.form.get('maxSpeed')?.value,
      address: this.form.get('address')?.value,
      promotionalDescription: this.form.get('promotionalDescription')?.value,
      capacity: this.form.get('capacity')?.value,
      rulesOfConduct: this.form.get('rulesOfConduct')?.value,
      fishingEquipment: this.form.get('fishingEquipment')?.value,
    }).subscribe((response: any) => {
      this.router.navigate(['/']);
    })
  }

}
