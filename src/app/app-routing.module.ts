import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDashboardComponent } from './modules/event/event-dashboard/event-dashboard.component';


const routes: Routes = [
  {path:"events", component:EventDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
