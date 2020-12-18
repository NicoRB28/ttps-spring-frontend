import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { HomeEventPlannerComponent } from './home-event-planner/home-event-planner.component';

@NgModule({
  //se declaran los componentes pertenecientes al modulo event
  declarations:[HomeEventPlannerComponent],
  imports:[
    ShareModule,
    EventModule,
  ]
})
export class EventModule {}
