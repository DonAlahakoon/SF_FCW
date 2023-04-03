import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../models/admin/admin';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  admin: Admin = new Admin();
  public signupForm !: FormGroup;
  constructor(private http:HttpClient,private router:Router){}

  ngOnInit(): void {
  }

  signUp(){
    this.http.post("http://localhost:7070/newAdmin",this.admin).subscribe(data=>{
      alert("SignUp Successfully");
      this.router.navigate(['login']);

    },error=>{alert("Something went wrong")})
  }

}
