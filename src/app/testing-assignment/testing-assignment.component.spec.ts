import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingAssignmentComponent } from './testing-assignment.component';

describe('TestingAssignmentComponent', () => {
  let component: TestingAssignmentComponent;
  let fixture: ComponentFixture<TestingAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingAssignmentComponent]
    });
    fixture = TestBed.createComponent(TestingAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
