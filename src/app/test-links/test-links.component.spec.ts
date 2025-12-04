import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLinksComponent } from './test-links.component';

describe('TestLinksComponent', () => {
  let component: TestLinksComponent;
  let fixture: ComponentFixture<TestLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestLinksComponent]
    });
    fixture = TestBed.createComponent(TestLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
