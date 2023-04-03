import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin-dash.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {path:'',component:AdminDashComponent,children:[
    {path:'students',component:ListStudentComponent},
    {path:'create-student',component:CreateStudentComponent},
    {path:'update-student/:id',component:UpdateStudentComponent},
    {path:'delete-student/:id',component:DeleteStudentComponent},
    {path:'student-details/:id',component:StudentDetailsComponent},
    {path:'',redirectTo:'/admin/students',pathMatch:'full'},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
