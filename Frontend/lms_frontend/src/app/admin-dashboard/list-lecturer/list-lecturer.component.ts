import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Lecturer } from 'src/app/models/lecturer/lecturer';
import { LecturerService } from 'src/app/shared/lecturer.service';

@Component({
  selector: 'app-list-lecturer',
  templateUrl: './list-lecturer.component.html',
  styleUrls: ['./list-lecturer.component.css']
})
export class ListLecturerComponent implements OnInit{

  lecturers:Lecturer[]|undefined;

  constructor(private service:LecturerService,private router : Router){}

  ngOnInit(): void {
    this.getLecturers();
  }
  getLecturers() {
    this.service.getLecturerList().pipe(
      tap(data => this.lecturers = data)
    ).subscribe();
  }

  updateLecturer(id:String){
    this.router.navigate(['/admin/update-lecturer/',id]);
  }
  deleteLecturer(id: String) {
    this.deleteLecFromDatabase(id);
    this.getLecturers();
  }
  deleteLecFromDatabase(id:String){
    this.service.deleteLecturer(id).subscribe(data =>{
      console.log(data);
    })
  }
  createLecturer(){
    this.router.navigate(['/admin/create-lecturer']);
  }
  lecturerDetails(id:String){
    this.router.navigate(['admin/lecturer-details',id]);
  }

}
