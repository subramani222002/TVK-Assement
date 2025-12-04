import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentplatformComponent } from './assessmentplatform.component';

describe('AssessmentplatformComponent', () => {
  let component: AssessmentplatformComponent;
  let fixture: ComponentFixture<AssessmentplatformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentplatformComponent]
    });
    fixture = TestBed.createComponent(AssessmentplatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
