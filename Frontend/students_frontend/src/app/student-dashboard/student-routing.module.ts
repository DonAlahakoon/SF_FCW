import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashComponent } from './student-dash.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OnlineReferComponent } from './online-refer/online-refer.component';

const routes: Routes = [
  {path:'',component:StudentDashComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'dash',component:DashboardComponent},
    {path:'onlineRef',component:OnlineReferComponent},
    {path:'',redirectTo:'/student/home',pathMatch:'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
