import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeActionsForHouseClientComponent } from './see-actions-for-house-client.component';

describe('SeeActionsForHouseClientComponent', () => {
  let component: SeeActionsForHouseClientComponent;
  let fixture: ComponentFixture<SeeActionsForHouseClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeActionsForHouseClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeActionsForHouseClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
