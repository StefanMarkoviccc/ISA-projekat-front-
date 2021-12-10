import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAvailabilityPeriodHouseComponent } from './create-availability-period-house.component';

describe('CreateAvailabilityPeriodHouseComponent', () => {
  let component: CreateAvailabilityPeriodHouseComponent;
  let fixture: ComponentFixture<CreateAvailabilityPeriodHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAvailabilityPeriodHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAvailabilityPeriodHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
