import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lecturer } from 'src/app/models/lecturer/lecturer';
import { LecturerService } from 'src/app/shared/lecturer.service';

@Component({
  selector: 'app-create-lecturer',
  templateUrl: './create-lecturer.component.html',
  styleUrls: ['./create-lecturer.component.css']
})
export class CreateLecturerComponent{

  lecturer:Lecturer = new Lecturer();

  constructor(private service:LecturerService,private router:Router){}

  saveLecturer(){
      this.service.createLecturer(this.lecturer).subscribe(data=>{
        console.log(data);
        
      },
      error=>console.log(error));
  }

  goToLecturerList(){
    this.router.navigate(['admin/lecturers']);
  }
  onSubmit(){
    console.log(this.lecturer);
    this.saveLecturer();
    this.goToLecturerList();
  }

  
  

}
