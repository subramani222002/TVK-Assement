import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndAssignmentComponent } from './back-end-assignment.component';

describe('BackEndAssignmentComponent', () => {
  let component: BackEndAssignmentComponent;
  let fixture: ComponentFixture<BackEndAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackEndAssignmentComponent]
    });
    fixture = TestBed.createComponent(BackEndAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
