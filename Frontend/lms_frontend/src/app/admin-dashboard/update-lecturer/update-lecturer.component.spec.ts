import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLecturerComponent } from './update-lecturer.component';

describe('UpdateLecturerComponent', () => {
  let component: UpdateLecturerComponent;
  let fixture: ComponentFixture<UpdateLecturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLecturerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
