import { Injectable } from '@angular/core';
import { Course } from '../models/course/course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  course : Course[]|undefined;

  constructor(private http:HttpClient) { }


  public getAllCourses(): Observable<Course[]>{
    return this.http.get<Course[]>("http://localhost:7070/findAllCourses");
  }

  public createCourse(course:Course):Observable<Object>{
    return this.http.post("http://localhost:7070/newCourse",course);
  }
  public deleteCourse(id:String):Observable<Object>{
    return this.http.delete("http://localhost:7070/deleteCourse/"+id);
  }
}
