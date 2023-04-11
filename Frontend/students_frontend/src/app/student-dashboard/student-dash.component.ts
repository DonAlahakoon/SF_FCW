import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dash',
  templateUrl: './student-dash.component.html',
  styleUrls: ['./student-dash.component.css']
})
export class StudentDashComponent {

  constructor(private authService:AuthService,private router:Router){}

  logout(){
    this.authService.logout();
    this.router.navigate(['login']);
    

  }

}
