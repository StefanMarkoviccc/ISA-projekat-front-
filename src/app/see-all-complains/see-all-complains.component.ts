import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-see-all-complains',
  templateUrl: './see-all-complains.component.html',
  styleUrls: ['./see-all-complains.component.scss']
})
export class SeeAllComplainsComponent implements OnInit {

  form: FormGroup
  complains: any;
  userId : any;


  constructor(private formBuilder: FormBuilder, private api: ApiService, private activatedRoute: ActivatedRoute) 
  {
    
    this.form = this.formBuilder.group({
      search: ['']
    });

    
  }

  ngOnInit(): void {
    this.getAllComplains();
    
  }


  getAllComplains() {

    this.api.getCurrentUser().subscribe((response: any) => {
      localStorage.setItem('user', JSON.stringify(response));

      this.userId = response.id;
      console.log(this.userId);


 
      this.api.getAllComplains({
        id: parseInt(this.userId),
      }).subscribe((response: any) => {
        this.complains = response;
      })
      console.log(this.userId);
    });
    
      
  }

  onSubmit() {
    this.getAllComplains();
  }
}
