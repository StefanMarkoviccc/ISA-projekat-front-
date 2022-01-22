import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelAppointmentHouseComponent } from './cancel-appointment-house.component';

describe('CancelAppointmentHouseComponent', () => {
  let component: CancelAppointmentHouseComponent;
  let fixture: ComponentFixture<CancelAppointmentHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelAppointmentHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelAppointmentHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
