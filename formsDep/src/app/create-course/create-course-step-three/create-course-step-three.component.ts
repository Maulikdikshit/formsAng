import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-course-step-three',
  templateUrl: './create-course-step-three.component.html',
  styleUrls: ['./create-course-step-three.component.scss']
})
export class CreateCourseStepThreeComponent {


  stepThreeForm = this.fb.group({
    lessons: this.fb.array([])
  });

  get lessons(){
    return this.stepThreeForm.controls['lessons'] as FormArray;
  }

  deleteLessons(i){
    this.lessons.removeAt(i);
  }

  addLesson(){
    console.log('it executed');
    const lessonForm = this.fb.group({
      title: ['', Validators.required],
      level: ['beginner', Validators.required]
    });

    this.lessons.push(lessonForm);
  }

  constructor(private fb: FormBuilder){}
}
