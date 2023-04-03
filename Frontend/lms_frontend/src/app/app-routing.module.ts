import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { ListStudentComponent } from './admin-dashboard/list-student/list-student.component';
import { CreateStudentComponent } from './admin-dashboard/create-student/create-student.component';
import { UpdateStudentComponent } from './admin-dashboard/update-student/update-student.component';
import { DeleteStudentComponent } from './admin-dashboard/delete-student/delete-student.component';
import { StudentDetailsComponent } from './admin-dashboard/student-details/student-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashComponent } from './admin-dashboard/admin-dash.component';



const routes:Routes = [
  {path:'students',component:ListStudentComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'create-student',component:CreateStudentComponent},
  {path:'update-student/:id',component:UpdateStudentComponent},
  {path:'delete-student/:id',component:DeleteStudentComponent},
  {path:'student-details/:id',component:StudentDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin-dash',component:AdminDashComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
