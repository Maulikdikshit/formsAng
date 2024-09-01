import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
  providers:[
    {
      provide: STEPPER_GLOBAL_OPTIONS, 
      useValue: {showError: true}
    }
  ]
})
export class CreateCourseComponent {

  submit(stepOne, stepTwo, stepThree){
    console.log(stepOne, stepTwo, stepThree);
  }

}
