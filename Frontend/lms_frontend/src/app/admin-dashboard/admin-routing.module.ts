import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin-dash.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { HomeComponent } from './home/home.component';
import { ListLecturerComponent } from './list-lecturer/list-lecturer.component';
import { CreateLecturerComponent } from './create-lecturer/create-lecturer.component';
import { UpdateLecturerComponent } from './update-lecturer/update-lecturer.component';
import { LecturerDetailsComponent } from './lecturer-details/lecturer-details.component';

const routes: Routes = [
  {path:'',component:AdminDashComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'students',component:ListStudentComponent},
    {path:'create-student',component:CreateStudentComponent},
    {path:'update-student/:id',component:UpdateStudentComponent},
    {path:'student-details/:id',component:StudentDetailsComponent},
    {path:'',redirectTo:'/admin/home',pathMatch:'full'},

    {path:'lecturers',component:ListLecturerComponent},
    {path:'create-lecturer',component:CreateLecturerComponent},
    {path:'update-lecturer/:id',component:UpdateLecturerComponent},
    {path:'lecturer-details/:id',component:LecturerDetailsComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
