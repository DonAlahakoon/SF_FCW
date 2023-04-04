import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateLecturerComponent } from './create-lecturer/create-lecturer.component';
import { UpdateLecturerComponent } from './update-lecturer/update-lecturer.component';
import { ListLecturerComponent } from './list-lecturer/list-lecturer.component';
import { LecturerDetailsComponent } from './lecturer-details/lecturer-details.component';
import { LecturerService } from '../shared/lecturer.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    CreateLecturerComponent,
    UpdateLecturerComponent,
    ListLecturerComponent,
    LecturerDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ],
})
export class AdminModule { }
