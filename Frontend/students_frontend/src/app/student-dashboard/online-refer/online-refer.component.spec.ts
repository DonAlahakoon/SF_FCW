import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineReferComponent } from './online-refer.component';

describe('OnlineReferComponent', () => {
  let component: OnlineReferComponent;
  let fixture: ComponentFixture<OnlineReferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineReferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineReferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
