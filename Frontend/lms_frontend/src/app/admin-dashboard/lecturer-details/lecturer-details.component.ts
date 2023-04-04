import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lecturer } from 'src/app/models/lecturer/lecturer';
import { LecturerService } from 'src/app/shared/lecturer.service';

@Component({
  selector: 'app-lecturer-details',
  templateUrl: './lecturer-details.component.html',
  styleUrls: ['./lecturer-details.component.css']
})
export class LecturerDetailsComponent implements OnInit{

  id:String|any;
  lecturer:Lecturer|any;

  constructor(private route:ActivatedRoute,private router:Router,private service:LecturerService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.lecturer = new Lecturer();
    this.service.getLecturerById(this.id).subscribe(data=>{
      this.lecturer = data;
    })
    
  }

  onSubmit(){
    this.router.navigate(['admin/lecturers']);
  }
}
