import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionHouseComponent } from './action-house.component';

describe('ActionHouseComponent', () => {
  let component: ActionHouseComponent;
  let fixture: ComponentFixture<ActionHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
