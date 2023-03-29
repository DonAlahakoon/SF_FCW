import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
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
    this.service.getAllStudents().subscribe((data)=>this.students=data);
  }

  updateStudent(id:number){
    this.router.navigate(['update-student',id]);
  }

  deleteStudent(id:number){
    this.router.navigate(['delete-student',id]);
  }

  studentDetails(id:number){
    this.router.navigate(['student-details',id]);
  }

  

  

}
