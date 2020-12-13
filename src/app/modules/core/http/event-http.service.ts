import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EventHttpService {

  private baseUrl = `${environment.backendApi}events/`;

  constructor(private http: HttpClient){}

  getAllEvents():Observable<Event[]> {
    return this.http.get<Event[]>(this.baseUrl);
  }

}
