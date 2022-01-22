import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportForFinishedAppointmentComponent } from './report-for-finished-appointment.component';

describe('ReportForFinishedAppointmentComponent', () => {
  let component: ReportForFinishedAppointmentComponent;
  let fixture: ComponentFixture<ReportForFinishedAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportForFinishedAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportForFinishedAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
