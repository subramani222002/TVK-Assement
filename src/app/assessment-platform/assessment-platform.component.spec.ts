import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentPlatformComponent } from './assessment-platform.component';

describe('AssessmentPlatformComponent', () => {
  let component: AssessmentPlatformComponent;
  let fixture: ComponentFixture<AssessmentPlatformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentPlatformComponent]
    });
    fixture = TestBed.createComponent(AssessmentPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
