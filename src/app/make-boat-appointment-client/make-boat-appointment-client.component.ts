import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-make-boat-appointment-client',
  templateUrl: './make-boat-appointment-client.component.html',
  styleUrls: ['./make-boat-appointment-client.component.scss']
})
export class MakeBoatAppointmentClientComponent implements OnInit {

  form: FormGroup;
  selectedBoat: any;
  isAction: any;
  id: any;
  userId: any;
  showMessage: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router,private activatedRoute: ActivatedRoute) {
    this.form = this.formBuilder.group({
      additionalServices: ['', Validators.required],
      date: ['', Validators.required],
      duration: ['', Validators.required],
      maxPersons: ['', Validators.required],
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    });

    this.showMessage=false;

   }

  ngOnInit(): void {


  }

  onSubmit() {

   

    this.api.getCurrentUser().subscribe((response: any) => {
      localStorage.setItem('user', JSON.stringify(response));

      this.userId = response.id;

      this.api.createBoatAppointment({
        boatId: parseInt(this.id),
        clientId: parseInt(this.userId),
        additionalServices: this.form.get('additionalServices')?.value,
        date: this.form.get('date')?.value,
        duration: this.form.get('duration')?.value,
        maxPersons: this.form.get('maxPersons')?.value,
      }).subscribe((response: any) => {
        this.router.navigate(['/boat-owner-home-page']);
      })
    }, (error: any) => {
      this.showMessage = true;
    });

  }

}
