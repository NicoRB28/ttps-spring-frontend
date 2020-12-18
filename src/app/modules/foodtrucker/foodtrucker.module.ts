import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodtruckerDashboardComponent } from './foodtrucker-dashboard/foodtrucker-dashboard.component';
import { TruckerModule } from '../truck/truck.module';
import { UserModule } from '../user/user.module';

@NgModule({
  //se declaran los componentes pertenecientes al modulo event
  declarations:[HomeComponent, FoodtruckerDashboardComponent],
  imports:[
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TruckerModule,
    UserModule,

  ],
  exports:[
    HomeComponent,
  ]
})
export class FoodTruckerModule {}
