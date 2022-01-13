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
  selector: 'app-house-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  templateUrl: './house-profile.component.html',
  styleUrls: ['./house-profile.component.scss']
})
export class HouseProfileComponent implements OnInit {

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();


  constructor(private formBuilder: FormBuilder, private api: ApiService, 
    private sanitizer: DomSanitizer,
    private router: Router, private activatedRoute: ActivatedRoute, private modal: NgbModal) 
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

  form: FormGroup
  houses: any;
  houseAvaliabilityPeriods: any;
  actionsHouse: any;

  base64textString: any;
  selectedHouseId: any;
  id: any;
  user: any;
  images: any;




  
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

      this.getAvailabilityPeriods();
      //this.getActionsHouse();
        })

    
  }

  getAvailabilityPeriods() {
      
    this.api.getAvailabilityForHouse({id: this.id}).subscribe((response: any) => {
      this.houseAvaliabilityPeriods = response;
      
      for(let event of this.houseAvaliabilityPeriods) {
        console.log(event)  
        this.events.push({
            start: new Date(event.dateFrom),
            end: new Date(event.dateTo),
            title: this.houses ? this.houses[0].name : 'House',
            color: colors.red,
            actions: this.actions,
            allDay: true,
          });
      }


    })

  }

  getActionsHouse() {

    this.api.getActionForHouse({id: this.id}).subscribe((response: any) => {
      this.actionsHouse = response;

      for(let event of this.actionsHouse){
        console.log(event)  
        this.events.push({
            start: new Date(event.dateFrom),
            end: new Date(event.dateTo),
            title: this.houses ? this.houses[0].name : 'House',
            color: colors.blue,
            actions: this.actionsHouse,
            allDay: true,
          });
      }

    });

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
