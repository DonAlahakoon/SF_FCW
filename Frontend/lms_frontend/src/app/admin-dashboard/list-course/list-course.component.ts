import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course/course';
import { CourseService } from 'src/app/shared/course.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit{

  courses:Course[]=[];

  constructor(private service:CourseService,private router:Router){}

  ngOnInit(): void {
    this.getCourses();
  }
  private getCourses(){
    this.service.getAllCourses().subscribe(data=>this.courses=data);
  }

  createCourse(){
    this.router.navigate(['admin/create-course']);
  }

  deleteCourse(id:String){
    this.deleteCourseFromDB(id);
    this.getCourses();
  }
  deleteCourseFromDB(id:String){
    this.service.deleteCourse(id).subscribe(data=>{
      console.log(data);
    });
  }
}
