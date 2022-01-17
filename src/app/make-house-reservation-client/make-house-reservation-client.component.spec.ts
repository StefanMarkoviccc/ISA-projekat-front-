import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeHouseReservationClientComponent } from './make-house-reservation-client.component';

describe('MakeHouseReservationClientComponent', () => {
  let component: MakeHouseReservationClientComponent;
  let fixture: ComponentFixture<MakeHouseReservationClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeHouseReservationClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeHouseReservationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
