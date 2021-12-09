import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationListClientProfileComponent } from './reservation-list-client-profile.component';

describe('ReservationListClientProfileComponent', () => {
  let component: ReservationListClientProfileComponent;
  let fixture: ComponentFixture<ReservationListClientProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationListClientProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationListClientProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
