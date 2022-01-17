import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeReservationsClientComponent } from './see-reservations-client.component';

describe('SeeReservationsClientComponent', () => {
  let component: SeeReservationsClientComponent;
  let fixture: ComponentFixture<SeeReservationsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeReservationsClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeReservationsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
