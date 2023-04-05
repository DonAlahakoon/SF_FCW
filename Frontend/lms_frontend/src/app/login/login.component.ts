import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
      this.router.navigate(['admin']);
    }
    
    this.loginForm = this.formBuilder.group({
      username:[''],
      password:['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:7070/findAllAdmins")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.authService.setToken('thisIsTheToken');
        this.router.navigate(['admin']);
        
      }else{
        alert("Username or password is incorrect");
      }
    },error=>{alert("Something went wrong!!")})
  }



}
