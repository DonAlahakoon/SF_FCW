import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course/course';
import { CourseService } from 'src/app/shared/course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {

  course: Course = new Course();

  constructor(private service:CourseService,private router:Router){}

  saveCourse(){
    this.service.createCourse(this.course).subscribe(data=>{
      console.log(data);
    },
    error => console.log(error));
  }
  onSubmit(){
    console.log(this.course);
    this.saveCourse();
    this.goToCourseList();
  }
  goToCourseList(){
    this.router.navigate(['admin/courses']);
  }
}
