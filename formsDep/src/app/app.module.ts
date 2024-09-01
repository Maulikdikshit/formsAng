import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import {  MatInputModule } from "@angular/material/input";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule } from "@angular/material/select";
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressBarModule} from '@angular/material/progress-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { PasswordStrengthDirective } from './directives/password-strength.directive';
import { OnlyOneErrorPipe } from './pipes/only-one-error.pipe';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CreateCourseStepOneComponent } from './create-course/create-course-step-one/create-course-step-one.component';
import { CreateCourseStepTwoComponent } from './create-course/create-course-step-two/create-course-step-two.component';
import { CreateCourseStepThreeComponent } from './create-course/create-course-step-three/create-course-step-three.component';
import { CoursesService } from './services/courses.service';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AddressFormComponent } from './address-form/address-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PasswordStrengthDirective,
    OnlyOneErrorPipe,
    LoginReactiveComponent,
    CreateCourseComponent,
    CreateCourseStepOneComponent,
    CreateCourseStepTwoComponent,
    CreateCourseStepThreeComponent,
    FileUploadComponent,
    AddressFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatProgressBarModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatTabsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatStepperModule,
    MatNativeDateModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
