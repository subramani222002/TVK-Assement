import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndAssignmentComponent } from './front-end-assignment.component';

describe('FrontEndAssignmentComponent', () => {
  let component: FrontEndAssignmentComponent;
  let fixture: ComponentFixture<FrontEndAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontEndAssignmentComponent]
    });
    fixture = TestBed.createComponent(FrontEndAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
