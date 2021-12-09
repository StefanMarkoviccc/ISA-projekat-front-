import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDeleteAccountComponent } from './request-delete-account.component';

describe('RequestDeleteAccountComponent', () => {
  let component: RequestDeleteAccountComponent;
  let fixture: ComponentFixture<RequestDeleteAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestDeleteAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDeleteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
