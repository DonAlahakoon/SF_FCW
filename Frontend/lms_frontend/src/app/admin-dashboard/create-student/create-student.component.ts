import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../models/student/student';
import { StudentService } from '../../shared/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  student: Student = new Student();

  constructor(private service:StudentService,private router:Router){}

  saveStudent(){
    this.service.createStudent(this.student).subscribe(data=>{
      console.log(data);
      this.goToStudentList();
    },
      error => console.log (error)
    );
    

  }

  goToStudentList(){
    this.router.navigate(['students']);
  }
  onSubmit(){
    console.log(this.student);
    this.saveStudent();
  }

}
