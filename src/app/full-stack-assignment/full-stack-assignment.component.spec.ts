import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackAssignmentComponent } from './full-stack-assignment.component';

describe('FullStackAssignmentComponent', () => {
  let component: FullStackAssignmentComponent;
  let fixture: ComponentFixture<FullStackAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullStackAssignmentComponent]
    });
    fixture = TestBed.createComponent(FullStackAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
