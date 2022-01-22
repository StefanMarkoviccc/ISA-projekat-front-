import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservActionForBoatComponent } from './reserv-action-for-boat.component';

describe('ReservActionForBoatComponent', () => {
  let component: ReservActionForBoatComponent;
  let fixture: ComponentFixture<ReservActionForBoatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservActionForBoatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservActionForBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
