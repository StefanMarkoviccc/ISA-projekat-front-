import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-report-for-finished-appointment',
  templateUrl: './report-for-finished-appointment.component.html',
  styleUrls: ['./report-for-finished-appointment.component.scss']
})
export class ReportForFinishedAppointmentComponent implements OnInit {

  form : FormGroup
  id: any;

  constructor(private formBuilder: FormBuilder,  private api: ApiService, private activatedRoute: ActivatedRoute,private router: Router) {

    this.activatedRoute.queryParams.subscribe(params => {
      
    });


    this.form = this.formBuilder.group({
      text : [" ", Validators.required]
    })
  }
  ngOnInit(): void {

  }


  onSubmit() {
 
      this.api.createAppointmentReport({
          text : this.form.get('text')?.value,
      }).subscribe((response: any) => {
        this.router.navigate(['/house-view']);
      })

  }
}
