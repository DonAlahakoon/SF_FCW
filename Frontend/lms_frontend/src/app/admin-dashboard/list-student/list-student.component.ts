import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../shared/student.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit{

  students:Student[]|undefined;

  constructor(private service:StudentService,private router:Router){}

  ngOnInit(): void {
    this.getStudents();
  }
  private getStudents(){
    this.service.getAllStudents().subscribe(data=>this.students=data);
  }

  updateStudent(id:number){
    this.router.navigate(['update-student',id]);
  }

  deleteStudent(id:number){
    this.service.deleteStudent(id).subscribe(data=>{
      console.log(data);
      this.getStudents();
    })
  }

  studentDetails(id:number){
    this.router.navigate(['student-details',id]);
  }
  createStudent(){
    this.router.navigate(['create-student']);
  }

  

  

}
