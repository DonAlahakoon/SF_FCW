import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../shared/student.service';
import { Student } from '../../models/student/student';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{

  snapId: number|any;
  student: Student|any;

  constructor(private service : StudentService,private route:ActivatedRoute,private router:Router){ }

  ngOnInit(): void {
    this.snapId = this.route.snapshot.params['id'];
    this.service.getStudentById(this.snapId).subscribe(data=>{
      this.student = data;
    },
    error => console.log(error));
  }
  onSubmit(){
    this.updateStudent();
    this.goToStudentList();
  }
  updateStudent(){
    this.service.updateStudent(this.student.id,this.student).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
  }
    goToStudentList(){
      this.router.navigate(['/admin/students']);
    }

}
