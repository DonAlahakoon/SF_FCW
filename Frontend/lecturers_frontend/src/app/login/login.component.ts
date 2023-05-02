import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public loginForm !: FormGroup;

  constructor(private formBuilder: FormBuilder,router:Router) { }

  ngOnInit(): void {
    

    this.loginForm = this.formBuilder.group({
      username:[''],
      password:['']
    })
  }

  login(){}

}
