import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityPeriodComponent } from './availability-period.component';

describe('AvailabilityPeriodComponent', () => {
  let component: AvailabilityPeriodComponent;
  let fixture: ComponentFixture<AvailabilityPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailabilityPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
