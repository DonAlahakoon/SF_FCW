import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  public getAllStudents(): Observable<Student[]>{
    return this.http.get<Student[]>("http://localhost:7070/findAllStudents");
  }
  
  public createStudent(student:Student): Observable<Object>{
    return this.http.post("http://localhost:7070/addStudent",student);
  }

  public getStudentById(id:number):Observable<Object>{
    return this.http.get<Student>("http://localhost:7070/findStudentById/"+id);
  }
  public updateStudent(id:number,student:Student):Observable<Object>{
    return this.http.put("http://localhost:7070/updateStudent/"+id,student);
  }
  public deleteStudent(id:number):Observable<Object>{
    return this.http.delete("http://localhost:7070/deleteStudent/"+id);
  }
}
