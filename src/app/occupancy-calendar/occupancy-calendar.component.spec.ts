import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupancyCalendarComponent } from './occupancy-calendar.component';

describe('OccupancyCalendarComponent', () => {
  let component: OccupancyCalendarComponent;
  let fixture: ComponentFixture<OccupancyCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccupancyCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupancyCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
