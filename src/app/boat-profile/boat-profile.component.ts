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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-boat-view',
  templateUrl: './boat-profile.component.html',
  styles: [
    `
      h3 {
        margin: 0 0 10px;
      }

      pre {
        background-color: #f5f5f5;
        padding: 15px;
      }
    `,
  ],
  styleUrls: ['./boat-profile.component.scss']
})
export class BoatProfileComponent implements OnInit {

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  form: FormGroup


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

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
      },
    },
  ];

  refresh = new Subject<void>();

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = true;


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }


  boats: any;
  boatAvaliabilityPeriods: any;
  actionsBoat: any;

  base64textString: any;
  selectedBoatId: any;
  id: any;
  user: any;
  images: any;
  boat: any;

  

  ngOnInit(): void {
    this.getBoats();
  }

  getImages() {

    this.api.getBoatImages({id: this.id}).subscribe((response: any) => {
      this.images = [];

      for(let image of response) {
        this.images.push(image.content)
      }

      console.log(this.images);

    });

  }

  getBoats() {
    let search = this.form.get('search')?.value ? this.form.get('search')?.value : '' 

    this.api.getBoat({id: this.id}).subscribe((response: any) => {
      this.boats = [response];
    })

    this.getAvailabilityPeriods();
  }

  getAvailabilityPeriods() {
      
    this.api.getAvailabilityForBoat({id: this.id}).subscribe((response: any) => {
      this.boatAvaliabilityPeriods = response;
      
      for(let event of this.boatAvaliabilityPeriods) {
        console.log(event)  
        this.events.push({
            start: new Date(event.dateFrom),
            end: new Date(event.dateTo),
            title: this.boats ? this.boats[0].name : 'Boat',
            color: colors.red,
            actions: this.actions,
            allDay: true,
          });
      }


    })

  }

  getActions() {

    this.api.getActionForBoat({id: this.id}).subscribe((response: any) => {
      this.actionsBoat = response;

      for(let event of this.actionsBoat){
        console.log(event)  
        this.events.push({
            start: new Date(event.dateFrom),
            end: new Date(event.dateTo),
            title: this.boats ? this.boats[0].name : 'Boat',
            color: colors.blue,
            actions: this.actionsBoat,
            allDay: true,
          });
      }

    });

  }

  onSubmit() {
    console.log(this.id)
    this.api.deleteBoat({
     id: this.id,
    }).subscribe((response: any) => {
      this.router.navigate(['/boatView']);
    })
  }

  handleFileInput(event: any | null, boatId: any) {

    if(event.target.files === null) {
      return;
    }

    let file = event.target.files.item(0);

    if (file) {
      const reader = new FileReader();
      console.log(event, boatId);
      this.selectedBoatId = boatId;
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
}

  handleReaderLoaded(e: any) {
  this.base64textString = ('data:image/png;base64,' + btoa(e.target.result));

  this.api.createBoatImage({
    boatId: this.id,
    content: this.base64textString
  }).subscribe((response: any) => {
    this.getImages();
  })
  }
}
