import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReservationsComponent } from './new-reservations.component';

describe('NewReservationsComponent', () => {
  let component: NewReservationsComponent;
  let fixture: ComponentFixture<NewReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
