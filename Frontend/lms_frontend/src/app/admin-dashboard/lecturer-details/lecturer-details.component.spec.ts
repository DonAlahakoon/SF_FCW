import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerDetailsComponent } from './lecturer-details.component';

describe('LecturerDetailsComponent', () => {
  let component: LecturerDetailsComponent;
  let fixture: ComponentFixture<LecturerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecturerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
