import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCompletedReservationsComponent } from './report-completed-reservations.component';

describe('ReportCompletedReservationsComponent', () => {
  let component: ReportCompletedReservationsComponent;
  let fixture: ComponentFixture<ReportCompletedReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportCompletedReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCompletedReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
