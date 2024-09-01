import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { map } from "rxjs";
import { CoursesService } from "../services/courses.service";


export function courseTitleValidator(courses: CoursesService): AsyncValidatorFn{

    return (control: AbstractControl) => {
       return  courses.getAllCourses().pipe(
           map((courses) => {
               const course = courses.find((course) => course.name.toLowerCase() === control.value.toLowerCase());
               return course ? {titleExists: true} : null;
           } )
       )
    }
}