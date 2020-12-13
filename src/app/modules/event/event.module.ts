import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { EventListComponent } from './event-list/event-list.component';

@NgModule({
  //se declaran los componentes pertenecientes al modulo event
  declarations:[EventListComponent],
  imports:[
    ShareModule
  ]
})
export class EventModule {}
