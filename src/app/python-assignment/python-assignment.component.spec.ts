import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonAssignmentComponent } from './python-assignment.component';

describe('PythonAssignmentComponent', () => {
  let component: PythonAssignmentComponent;
  let fixture: ComponentFixture<PythonAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PythonAssignmentComponent]
    });
    fixture = TestBed.createComponent(PythonAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
