import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-client-reservation-page',
  templateUrl: './client-reservation-page.component.html',
  styleUrls: ['./client-reservation-page.component.scss']
})
export class ClientReservationPageComponent implements OnInit {
  form: FormGroup;


  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.form = this.formBuilder.group({
      dateTo: ['', Validators.required],
      dateFrom: ['', Validators.required],
      entity: ['', Validators.required],
    });

  

   }

  ngOnInit(): void {
  }

  onSubmit() {
// prikazi samo izmedju dva datuma i da ovo bude combo box
    if(this.form.get('entity')?.value=='House'){
      this.api.getHouses({
        
      }).subscribe((response: any) => {
        this.router.navigate(['/houseView'])
      })
    }else if(this.form.get('entity')?.value=='Boat'){
      this.api.getBoats({
        
      }).subscribe((response: any) => {
        this.router.navigate(['/boatView'])
      })
    }else if(this.form.get('entity')?.value=='Adventure'){
      this.api.getAdventures({
        
      }).subscribe((response: any) => {
        this.router.navigate(['/home'])
      })
    }
   // this.api.createBoatAvailabilityPeriod({
     // dateTo: this.form.get('dateTo')?.value,
      //dateFrom: this.form.get('dateFrom')?.value,
    //}).subscribe((response: any) => {
     // this.router.navigate(['/boatView']);
    //})
  }
}