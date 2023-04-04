import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lecturer } from 'src/app/models/lecturer/lecturer';
import { LecturerService } from 'src/app/shared/lecturer.service';

@Component({
  selector: 'app-update-lecturer',
  templateUrl: './update-lecturer.component.html',
  styleUrls: ['./update-lecturer.component.css']
})
export class UpdateLecturerComponent implements OnInit{

  snapId: number|any;
  lecturer: Lecturer|any;

  constructor(private service: LecturerService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.snapId = this.route.snapshot.params['id']; 
    this.service.getLecturerById(this.snapId).subscribe(data=>{
      this.lecturer = data;
    },
    error => console.log(error));   
  }

  onSubmit(){
    this.service.updateLecturer(this.lecturer.id,this.lecturer).subscribe(data=>{
      this.goToLecturerList();
    },
    error=>console.log(error));
  }
  goToLecturerList(){
    this.router.navigate(['/admin/lecturers']);
  }

}
