import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import {
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';


@Component({
  selector: 'app-house-profile',
  templateUrl: './house-profile.component.html',
  styleUrls: ['./house-profile.component.scss']
})
export class HouseProfileComponent implements OnInit {

  form: FormGroup
  houses: any;

  base64textString: any;
  selectedHouseId: any;
  id: any;
  user: any;
  images: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, 
    private sanitizer: DomSanitizer,
    private router: Router, private activatedRoute: ActivatedRoute) 
  {
    let jsonUser = localStorage.getItem('user');
    this.images = [];;
    if(jsonUser) {
      this.user = JSON.parse(jsonUser);
    }

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
    });


    this.form = this.formBuilder.group({
  
    });

    this.getImages();
  }

  ngOnInit(): void {
    this.getHouses();
  }

  getImages() {

    this.api.getHouseImages({id: this.id}).subscribe((response: any) => {
      this.images = [];

      for(let image of response) {
        this.images.push(image.content)
      }

      console.log(this.images);

    });

  }

  getHouses() {

    let search = this.form.get('search')?.value ? this.form.get('search')?.value : '' 

    this.api.getHouse({id: this.id}).subscribe((response: any) => {
      this.houses = [response];
    })
  }

  onSubmit() {
    console.log(this.id)
    this.api.deleteHouse({
     id: this.id,
    }).subscribe((response: any) => {
      this.router.navigate(['/houseView']);
    })
  }

  handleFileInput(event: any | null, houseId: any) {

    if(event.target.files === null) {
      return;
    }

    let file = event.target.files.item(0);

    if (file) {
      const reader = new FileReader();
      console.log(event, houseId);
      this.selectedHouseId = houseId;
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
}

  handleReaderLoaded(e: any) {
  this.base64textString = ('data:image/png;base64,' + btoa(e.target.result));

  this.api.createImage({
    houseId: this.selectedHouseId,
    content: this.base64textString
  }).subscribe((response: any) => {
    this.getImages();
  })
  }
}
