import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservActionClientComponent } from './reserv-action-client.component';

describe('ReservActionClientComponent', () => {
  let component: ReservActionClientComponent;
  let fixture: ComponentFixture<ReservActionClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservActionClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservActionClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
