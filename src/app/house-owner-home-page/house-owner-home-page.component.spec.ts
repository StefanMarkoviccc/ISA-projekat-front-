import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseOwnerHomePageComponent } from './house-owner-home-page.component';

describe('HouseOwnerHomePageComponent', () => {
  let component: HouseOwnerHomePageComponent;
  let fixture: ComponentFixture<HouseOwnerHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseOwnerHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseOwnerHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
