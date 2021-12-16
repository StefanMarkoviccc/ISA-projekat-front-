import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseAvailabilityPeriodComponent } from './house-availability-period.component';

describe('HouseAvailabilityPeriodComponent', () => {
  let component: HouseAvailabilityPeriodComponent;
  let fixture: ComponentFixture<HouseAvailabilityPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseAvailabilityPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseAvailabilityPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
