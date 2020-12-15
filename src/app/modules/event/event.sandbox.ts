import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Event } from 'src/app/model/event';
import { EventHttpService } from '../core/http/event-http.service';

@Injectable({
  providedIn: 'root'
})
export class EventSandbox {

  public events$: Subject<Event[]> = new Subject();

  constructor(private eventHttp: EventHttpService,
              ) { }

  public getAllEvents():void {
    this.eventHttp.getAllEvents().subscribe(res => this.events$.next(res));
  }

  public createEvent(data: Event):void {
    this.eventHttp.createEvetn(data).subscribe(data =>{
      alert("Evento creado!");
      this.getAllEvents();
    }, error => {
      alert(error);
    });
  }

  public deleteEvent(id: number):void {
    this.eventHttp.deleteEvent(id).subscribe(data => {
        alert("se ha eliminado el evento");
        this.getAllEvents();
      },error =>{
        alert("Ocurrio un error al intentar eliminar el evento");
      });

  }

}
