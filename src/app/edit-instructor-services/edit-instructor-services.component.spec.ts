import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstructorServicesComponent } from './edit-instructor-services.component';

describe('EditInstructorServicesComponent', () => {
  let component: EditInstructorServicesComponent;
  let fixture: ComponentFixture<EditInstructorServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInstructorServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInstructorServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
