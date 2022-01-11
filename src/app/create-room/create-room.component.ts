import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {
  form: FormGroup;
  room: any;
  id: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.form = this.formBuilder.group({
      roomNumber: ['',Validators.required],
      numberOfBeds: ['',Validators.required]
     });

     this.activatedRoute.queryParams.subscribe(param => {
       this.id=param['id'];
     })
   }

  ngOnInit(): void {
  }

  onSubmit() {

    this.api.createRoom({
      houseId: parseInt(this.id),
      roomNumber: this.form.get('roomNumber')?.value,
      numberOfBeds: this.form.get('numberOfBeds')?.value,
    }).subscribe((response: any) => {
      this.router.navigate(['/houseView']);
    })
  }
}
