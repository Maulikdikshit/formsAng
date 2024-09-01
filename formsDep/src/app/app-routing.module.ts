import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCourseComponent } from './create-course/create-course.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'login-reactive', component: LoginReactiveComponent},
  {path: 'create-course', component: CreateCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
