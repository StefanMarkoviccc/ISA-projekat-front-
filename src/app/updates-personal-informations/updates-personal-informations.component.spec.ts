import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesPersonalInformationsComponent } from './updates-personal-informations.component';

describe('UpdatesPersonalInformationsComponent', () => {
  let component: UpdatesPersonalInformationsComponent;
  let fixture: ComponentFixture<UpdatesPersonalInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesPersonalInformationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesPersonalInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
