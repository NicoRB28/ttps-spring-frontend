import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EventHttpService } from '../core/http/event-http.service';

@Injectable({
  providedIn: 'root'
})
export class EventSandbox {

  public events$: Subject<Event[]> = new Subject();

  constructor(private eventHttp: EventHttpService) { }

  public getAllEvents():void {
    this.eventHttp.getAllEvents().subscribe(res => this.events$.next(res));
  }


}
