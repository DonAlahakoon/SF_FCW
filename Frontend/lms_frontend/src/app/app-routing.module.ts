import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';



const routes:Routes = [

  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',
          canActivate:[AuthGuard],
          loadChildren:()=>
          import('./admin-dashboard/admin.module').then((m)=> m.AdminModule),
  },
  {path:"**",component:NotFoundComponent},
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
