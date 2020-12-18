import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Event } from 'src/app/model/event';

@Injectable({providedIn: 'root'})
export class EventHttpService {

  private baseUrl = `${environment.backendApi}ttps-spring/events/`;

  constructor(private http: HttpClient){}

  getAllEvents():Observable<Event[]> {
    return this.http.get<Event[]>(this.baseUrl);
  }

  createEvetn(newEvent: Event):Observable<Event> {
    return this.http.post<Event>(this.baseUrl + "newEvent", newEvent);
  }

  deleteEvent(id:Number):Observable<void>{
    return this.http.delete<void>(this.baseUrl+`${id}`);
  }

  update(data:Event):Observable<Event> {
    console.log(data.id);
    return this.http.put<Event>(this.baseUrl+`${data.id}`, data);
  }

}
