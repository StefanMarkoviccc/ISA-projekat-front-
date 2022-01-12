import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionBoatComponent } from './action-boat.component';

describe('ActionBoatComponent', () => {
  let component: ActionBoatComponent;
  let fixture: ComponentFixture<ActionBoatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionBoatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
