import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeBoatAppointmentClientComponent } from './make-boat-appointment-client.component';

describe('MakeBoatAppointmentClientComponent', () => {
  let component: MakeBoatAppointmentClientComponent;
  let fixture: ComponentFixture<MakeBoatAppointmentClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeBoatAppointmentClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeBoatAppointmentClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
