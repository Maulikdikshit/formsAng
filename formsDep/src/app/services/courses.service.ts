import { Injectable } from "@angular/core";
import { of } from "rxjs";


@Injectable()
export class CoursesService{

    courses = [
        {
            name:'Sample Course'
        },
        {
            name:'Advance Course'
        },
        {
            name:'Standard Course'
        }
    ];

    courseCategories = [
        {
            code: 'beginners',
            description: 'Beginners'
        },
        {
            code: 'mid',
            description: 'Mid'
        },
        {
            code: 'advance',
            description: 'Advance'
        },
    ]


    getCoursesCategories(){

        return of(this.courseCategories);

    }

    getAllCourses(){
        return of(this.courses);
    }

}