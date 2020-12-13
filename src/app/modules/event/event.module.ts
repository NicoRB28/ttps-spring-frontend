import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { EventListComponent } from './event-list/event-list.component';
import { EventDashboardComponent } from './event-dashboard/event-dashboard.component';

@NgModule({
  //se declaran los componentes pertenecientes al modulo event
  declarations:[EventListComponent, EventDashboardComponent],
  imports:[
    ShareModule
  ]
})
export class EventModule {}
