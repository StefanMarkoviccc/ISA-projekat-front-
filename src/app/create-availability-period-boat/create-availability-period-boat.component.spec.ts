import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAvailabilityPeriodBoatComponent } from './create-availability-period-boat.component';

describe('CreateAvailabilityPeriodBoatComponent', () => {
  let component: CreateAvailabilityPeriodBoatComponent;
  let fixture: ComponentFixture<CreateAvailabilityPeriodBoatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAvailabilityPeriodBoatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAvailabilityPeriodBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
