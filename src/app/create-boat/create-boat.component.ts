import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-boat',
  templateUrl: './create-boat.component.html',
  styleUrls: ['./create-boat.component.scss']
})
export class CreateBoatComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
    
  }

}
