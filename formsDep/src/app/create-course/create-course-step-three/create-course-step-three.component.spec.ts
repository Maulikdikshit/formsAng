import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseStepThreeComponent } from './create-course-step-three.component';

describe('CreateCourseStepThreeComponent', () => {
  let component: CreateCourseStepThreeComponent;
  let fixture: ComponentFixture<CreateCourseStepThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCourseStepThreeComponent]
    });
    fixture = TestBed.createComponent(CreateCourseStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
