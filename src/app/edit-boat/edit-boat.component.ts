import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-boat',
  templateUrl: './edit-boat.component.html',
  styleUrls: ['./edit-boat.component.scss']
})
export class EditBoatComponent implements OnInit {

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

     this.api.getBoat({id:1}).subscribe((response: any) => {
       
      this.form = this.formBuilder.group({
        name: [response.name,Validators.required],
        type: [response.type,Validators.required],
        length: [response.length,Validators.required],
        engineNumber: [response.engineNumber,Validators.required],
        enginePower: [response.enginePower,Validators.required],
        maxSpeed: [response.maxSpeed,Validators.required],
        address: [response.address,Validators.required],
        promotionalDescription: [response.promotionalDescription,Validators.required],
        capacity: [response.capacity,Validators.required],
        rulesOfConduct: [response.rulesOfConduct,Validators.required],
        fishingEquipment: [response.fishingEquipment,Validators.required]
      });
     });
   }

  ngOnInit(): void {
  }
  onSubmit() {

    this.api.editBoat({
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
