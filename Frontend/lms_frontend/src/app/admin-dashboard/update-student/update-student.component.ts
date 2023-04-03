import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../shared/student.service';
import { Student } from '../../models/student';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{

  id: number|any;
  student: Student|any;

  constructor(private service : StudentService,private route:ActivatedRoute,private router:Router){ }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getStudentById(this.id).subscribe(data=>{
      this.student = data;
    },
    error => console.log(error));
  }
  onSubmit(){
    this.service.updateStudent(this.id,this.student).subscribe(data=>{
      this.goToStudentList();
    },
    error=>console.log(error));
  }
    goToStudentList(){
      this.router.navigate(['/students']);
    }

}
