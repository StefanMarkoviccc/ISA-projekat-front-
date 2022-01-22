import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeActionForBoatClientComponent } from './see-action-for-boat-client.component';

describe('SeeActionForBoatClientComponent', () => {
  let component: SeeActionForBoatClientComponent;
  let fixture: ComponentFixture<SeeActionForBoatClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeActionForBoatClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeActionForBoatClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
