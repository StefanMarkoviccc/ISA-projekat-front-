import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllComplainsComponent } from './see-all-complains.component';

describe('SeeAllComplainsComponent', () => {
  let component: SeeAllComplainsComponent;
  let fixture: ComponentFixture<SeeAllComplainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeAllComplainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeAllComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
