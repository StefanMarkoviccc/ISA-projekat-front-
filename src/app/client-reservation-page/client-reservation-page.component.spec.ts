import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReservationPageComponent } from './client-reservation-page.component';

describe('ClientReservationPageComponent', () => {
  let component: ClientReservationPageComponent;
  let fixture: ComponentFixture<ClientReservationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientReservationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReservationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
