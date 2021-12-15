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
  selector: 'app-adventure-profile',
  templateUrl: './adventure-profile.component.html',
  styleUrls: ['./adventure-profile.component.scss']
})
export class AdventureProfileComponent implements OnInit {

  form: FormGroup
  adventures: any;

  base64textString: any;
  selectedAdventureId: any;
  id: any;
  user: any;
  images: any;

  constructor(private formBuilder: FormBuilder, private api : ApiService) 
  {
    this.form = this.formBuilder.group({
    });
  }

  ngOnInit(): void {
  }

  getImages() {

    this.api.getAdventureImages({id: this.id}).subscribe((response: any) => {
      this.images = [];

      for(let image of response) {
        this.images.push(image.content)
      }

      console.log(this.images);

    });

  }

  onSubmit() {
  }

  handleFileInput(event: any | null, adventureId: any) {

    if(event.target.files === null) {
      return;
    }

    let file = event.target.files.item(0);

    if (file) {
      const reader = new FileReader();
      console.log(event, adventureId);
      this.selectedAdventureId = adventureId;
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
}

  handleReaderLoaded(e: any) {
  this.base64textString = ('data:image/png;base64,' + btoa(e.target.result));

  this.api.createImage({
    adventureId: this.selectedAdventureId,
    content: this.base64textString
  }).subscribe((response: any) => {
    this.getImages();
  })
  }
}
