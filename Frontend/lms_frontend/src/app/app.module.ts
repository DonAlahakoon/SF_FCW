import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateStudentComponent } from './admin-dashboard/create-student/create-student.component';
import { ListStudentComponent } from './admin-dashboard/list-student/list-student.component';
import { DeleteStudentComponent } from './admin-dashboard/delete-student/delete-student.component';
import { UpdateStudentComponent } from './admin-dashboard/update-student/update-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from './shared/student.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailsComponent } from './admin-dashboard/student-details/student-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashComponent } from './admin-dashboard/admin-dash.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    ListStudentComponent,
    DeleteStudentComponent,
    UpdateStudentComponent,
    StudentDetailsComponent,
    LoginComponent,
    SignupComponent,
    AdminDashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
