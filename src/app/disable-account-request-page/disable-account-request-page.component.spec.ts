import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableAccountRequestPageComponent } from './disable-account-request-page.component';

describe('DisableAccountRequestPageComponent', () => {
  let component: DisableAccountRequestPageComponent;
  let fixture: ComponentFixture<DisableAccountRequestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisableAccountRequestPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableAccountRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
