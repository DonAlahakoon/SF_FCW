import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { ListStudentComponent } from './list-student/list-student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';


const routes:Routes = [
  {path:'students',component:ListStudentComponent},
  {path:'',redirectTo:'students',pathMatch:'full'},
  {path:'create-student',component:CreateStudentComponent},
  {path:'update-student/:id',component:UpdateStudentComponent},
  {path:'delete-student/:id',component:DeleteStudentComponent},
  {path:'student-details/:id',component:StudentDetailsComponent}
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
