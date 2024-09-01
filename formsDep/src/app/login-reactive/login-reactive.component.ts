import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from '../validators/password-strength.validator';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.scss']
})
export class LoginReactiveComponent {

  email = new FormControl('',{
    validators: [Validators.required,Validators.email],
    updateOn: 'blur'
  })

  password = new FormControl('',{
    validators: [
      Validators.required,
      Validators.minLength(8),
      createPasswordStrengthValidator()
    ]
  })

  formReactive =  new FormGroup({
    email: this.email,
    password: this.password
  })

  formBuilderReactive = this.fb.group({
    email: ['',
    {
      validators: [
        Validators.required,
        Validators.email
      ],
      updateOn: 'blur'
    }
    // [
    //   Validators.required,
    //   Validators.email
    //  ]
    ],
    password: ['',[
      Validators.required,
      Validators.minLength(8),
      createPasswordStrengthValidator()
     ]
    ]
  })



  constructor(private fb: FormBuilder){}

  get emailControl(){
  return this.formBuilderReactive.controls['email']
  }

  get passwordControl(){
    return this.formBuilderReactive.controls['password']
    }


    login(){
      console.log(this.formBuilderReactive.value)
    }

}
