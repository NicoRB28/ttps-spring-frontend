import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Event } from 'src/app/model/event';
import { EventHttpService } from '../core/http/event-http.service';

@Injectable({
  providedIn: 'root'
})
export class EventSandbox {

  public events$: Subject<Event[]> = new Subject();

  constructor(private eventHttp: EventHttpService,
              private toastr: ToastrService) { }

  public getAllEvents():void {
    this.eventHttp.getAllEvents().subscribe(res => this.events$.next(res));
  }

  public createEvent(data: Event):void {
    this.eventHttp.createEvetn(data).subscribe(data =>{
      this.toastr.success("Evento Creado!");
      this.getAllEvents();
    }, error => {
      this.toastr.error("Ha ocurrido un error al intentar crear el evento");
    });
  }

  public deleteEvent(id: number):void {
    this.eventHttp.deleteEvent(id).subscribe(data => {
        this.toastr.success("Se ha eliminado el evento");
        this.getAllEvents();
      },error =>{
        this.toastr.error("Ocurrio un error al intentar eliminar el evento: ");
      });

  }

  public updateEvent(data: Event):void {
    this.eventHttp.update(data).subscribe(data => {
      this.toastr.success("Se ha editado el evento");
      this.getAllEvents();
    }, error => {
      this.toastr.error("Algo ha ocurrido mal con la edidción.");
    })
  }

}
