import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentDashComponent } from './student-dash.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OnlineReferComponent } from './online-refer/online-refer.component';


@NgModule({
  declarations: [
    StudentDashComponent,
    HomeComponent,
    DashboardComponent,
    OnlineReferComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
