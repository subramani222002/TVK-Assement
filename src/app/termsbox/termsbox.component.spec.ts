import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsboxComponent } from './termsbox.component';

describe('TermsboxComponent', () => {
  let component: TermsboxComponent;
  let fixture: ComponentFixture<TermsboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsboxComponent]
    });
    fixture = TestBed.createComponent(TermsboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
