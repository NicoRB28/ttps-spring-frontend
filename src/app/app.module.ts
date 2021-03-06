import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShareModule } from './modules/share/share.module';
import { EventModule } from './modules/event/event.module';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './modules/user/user.module';
import { AuthGuard } from './model/authGuard';
import { FoodTruckerPermision } from './model/foodTruckerPermision';
import { FoodTruckerModule } from './modules/foodtrucker/foodtrucker.module';
import { TruckerModule } from './modules/truck/truck.module';
import { EventplannerPermision } from './model/eventplannerPermision';
import { EventPlannerModule } from './modules/eventplanner/eventplanner.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ShareModule,
    HttpClientModule,
    EventModule,
    UserModule,
    FoodTruckerModule,
    TruckerModule,
    EventPlannerModule
  ],
  providers: [AuthGuard, FoodTruckerPermision, EventplannerPermision],
  bootstrap: [AppComponent]
})
export class AppModule { }
