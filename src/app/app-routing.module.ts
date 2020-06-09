import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AdminauthService } from './adminauth.service';
import { SignupComponent } from '../app/signup/signup.component';
import { TravelComponent } from './travel/travel.component';
const routes: Routes = [
  {path : '', redirectTo : '/login', pathMatch : 'full'},
  // {path : '**', redirectTo : '/home', pathMatch : 'full'},
  // {path : 'home', component : HomeComponent},
  {path : 'heatmap', component : HeatmapComponent},
  {path : 'login', component : LoginComponent},
  {path : 'SignUp', component : SignupComponent},
  {path : 'admin', component : AdminComponent, children:[{path : 'travel', component: TravelComponent }], canActivate : [AdminauthService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
