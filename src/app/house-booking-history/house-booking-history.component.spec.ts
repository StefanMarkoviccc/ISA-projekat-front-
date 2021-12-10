import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseBookingHistoryComponent } from './house-booking-history.component';

describe('HouseBookingHistoryComponent', () => {
  let component: HouseBookingHistoryComponent;
  let fixture: ComponentFixture<HouseBookingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseBookingHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseBookingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
