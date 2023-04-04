import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../models/student/student';
import { StudentService } from '../../shared/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{

  id:number|any;
  student: Student|any;

  constructor(private route:ActivatedRoute,private router:Router,private service:StudentService){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.student = new Student();
    this.service.getStudentById(this.id).subscribe(data=>this.student=data);

  }
  onSubmit(){
    this.router.navigate(['admin/students']);
  }

}
