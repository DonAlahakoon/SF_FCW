import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLecturerComponent } from './create-lecturer.component';

describe('CreateLecturerComponent', () => {
  let component: CreateLecturerComponent;
  let fixture: ComponentFixture<CreateLecturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLecturerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
