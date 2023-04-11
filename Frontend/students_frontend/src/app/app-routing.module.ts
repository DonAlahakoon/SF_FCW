import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentRoutingModule } from './student-dashboard/student-routing.module';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'',redirectTo:'/login', pathMatch:'full'},
  {path:'student',
  canActivate: [AuthGuard],
  loadChildren:()=> import('./student-dashboard/student-routing.module').then((m)=>m.StudentRoutingModule)},
  {path:'**',component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
