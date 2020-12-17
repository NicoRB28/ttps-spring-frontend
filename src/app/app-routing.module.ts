import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventCreateFormComponent } from './modules/event/event-create-form/event-create-form.component';
import { EventDashboardComponent } from './modules/event/event-dashboard/event-dashboard.component';
import {RegisterComponent} from 'src/app/modules/user/register/register.component';
import { LoginComponent } from './modules/user/login/login.component';
import { AuthGuard } from 'src/app/model/authGuard';
import { HomeComponent } from './modules/foodtrucker/home/home.component';
import { FoodTruckerPermision } from './model/foodTruckerPermision';
import { FoodtruckerDashboardComponent } from './modules/foodtrucker/foodtrucker-dashboard/foodtrucker-dashboard.component';
import { TruckFormComponent } from './modules/truck/truck-form/truck-form.component';



const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"events", component:EventDashboardComponent,canActivate: [AuthGuard, FoodTruckerPermision]},
  {path:"eventForm", component:EventCreateFormComponent},
  {path:"foodtrucker", component:HomeComponent},
  {path:"tuckerDashboard", component:FoodtruckerDashboardComponent},
  {path:"truckForm", component:TruckFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
