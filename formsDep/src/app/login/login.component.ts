import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {



  login(loginForm: NgForm){
    console.log('login',loginForm.value);
  }

  onEmailChange($event: any){
    console.log('onEmailChange',$event)
  }
}
