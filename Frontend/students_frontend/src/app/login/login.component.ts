import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthGuard } from '../guards/auth.guard';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public loginForm !: FormGroup;

  constructor(private formBuilder: FormBuilder,private http: HttpClient, private router: Router,private authService:AuthService){}
  
  ngOnInit(): void {
    
    if(this.authService.isLoggedIn()){
      this.router.navigate(['student']);
    }

    this.loginForm = this.formBuilder.group({
      username:[''],
      password:['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:7070/findAllStudents")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.username === this.loginForm.value.username&& a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.authService.setToken('random');
        this.router.navigate(['student']);
      }
      else{
        alert("Username or password is incorrect!");
      }
    },error=>{alert("Something went wrong!!")})
  }

}
