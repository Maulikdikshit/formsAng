import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { createPromoRangeValidator } from 'src/app/validators/date-range.validator';

@Component({
  selector: 'app-create-course-step-two',
  templateUrl: './create-course-step-two.component.html',
  styleUrls: ['./create-course-step-two.component.scss']
})
export class CreateCourseStepTwoComponent {
  
  stepTwoForm = this.fb.group({
    courseType:['premium',Validators.required],
    price:[null,[
      Validators.required,
      Validators.min(1),
      Validators.max(9999),
      Validators.pattern("[0-9]+")
    ]],
    thumbnail: [null],
    promoStartAt: [null],
    promoEndAt: [null]
  },
  {
    validators: [createPromoRangeValidator()],
    // updateOn: 'blur'
  })

    constructor(private fb: FormBuilder){

    }

    ngOnInit(){
      this.stepTwoForm.valueChanges.subscribe((value) => {
        const priceControl = this.stepTwoForm.controls['price'];
        if(value.courseType == 'free' && priceControl.enabled){
          priceControl.disable({emitEvent: false});
        }
        else if(value.courseType == 'premium' && priceControl.disabled){
          priceControl.enable({emitEvent: false})
        }
      })
    }
}
