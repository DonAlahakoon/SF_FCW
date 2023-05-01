import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerDashComponent } from './lecturer-dash.component';

describe('LecturerDashComponent', () => {
  let component: LecturerDashComponent;
  let fixture: ComponentFixture<LecturerDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturerDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecturerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
