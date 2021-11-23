import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBoatAppointmentComponent } from './create-boat-appointment.component';

describe('CreateBoatAppointmentComponent', () => {
  let component: CreateBoatAppointmentComponent;
  let fixture: ComponentFixture<CreateBoatAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBoatAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBoatAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
