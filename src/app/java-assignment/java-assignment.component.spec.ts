import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaAssignmentComponent } from './java-assignment.component';

describe('JavaAssignmentComponent', () => {
  let component: JavaAssignmentComponent;
  let fixture: ComponentFixture<JavaAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JavaAssignmentComponent]
    });
    fixture = TestBed.createComponent(JavaAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
