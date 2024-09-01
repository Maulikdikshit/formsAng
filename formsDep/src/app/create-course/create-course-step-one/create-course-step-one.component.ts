import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { filter, Observable } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';
import { courseTitleValidator } from 'src/app/validators/course-title.validator';

interface CourseCategory{
  code: string;
  description: string;
}



@Component({
  selector: 'app-create-course-step-one',
  templateUrl: './create-course-step-one.component.html',
  styleUrls: ['./create-course-step-one.component.scss']
})
export class CreateCourseStepOneComponent implements OnInit {

  constructor(private fb: FormBuilder,private courses: CoursesService){

  }
  ngOnInit(): void {
    this.courseCategories$ = this.courses.getCoursesCategories();

    const draft = localStorage.getItem('Step_1');
    if(draft){
      this.stepOneForm.setValue(JSON.parse(draft));
    }

    this.stepOneForm.valueChanges.pipe(
        filter(() => this.stepOneForm.valid)
    ).subscribe((val) => {
      localStorage.setItem('Step_1',JSON.stringify(val))
    })
  }

  courseCategories$!: Observable<CourseCategory[]>;

  stepOneForm = this.fb.group({
    title: ['',{

      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
  
      ],
      asyncValidators: [courseTitleValidator(this.courses)],
      updateOn: 'blur'
    }
    ],
    category:['beginners',Validators.required],
    releaseAt:[new Date(),Validators.required],
    downloadAllowed: [false, Validators.requiredTrue],
    longDescription: ['',[Validators.required,Validators.minLength(3)]],
    // address: [null,Validators.required]
  })

  get courseTitle(){
    return this.stepOneForm.controls['title'];
  }

}
