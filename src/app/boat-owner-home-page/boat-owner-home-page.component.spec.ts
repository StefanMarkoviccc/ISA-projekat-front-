import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatOwnerHomePageComponent } from './boat-owner-home-page.component';

describe('BoatOwnerHomePageComponent', () => {
  let component: BoatOwnerHomePageComponent;
  let fixture: ComponentFixture<BoatOwnerHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatOwnerHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatOwnerHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
