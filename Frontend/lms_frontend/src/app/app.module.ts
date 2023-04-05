import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateStudentComponent } from './admin-dashboard/create-student/create-student.component';
import { ListStudentComponent } from './admin-dashboard/list-student/list-student.component';
import { UpdateStudentComponent } from './admin-dashboard/update-student/update-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from './shared/student.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailsComponent } from './admin-dashboard/student-details/student-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashComponent } from './admin-dashboard/admin-dash.component';
import { LecturerService } from './shared/lecturer.service';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    ListStudentComponent,
    UpdateStudentComponent,
    StudentDetailsComponent,
    LoginComponent,
    SignupComponent,
    AdminDashComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [StudentService,LecturerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
