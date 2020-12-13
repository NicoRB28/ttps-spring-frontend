import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class EventHttpService {

  private baseUrl = `${environment.backendApi}loquesiga/`;

  constructor(private http: HttpClient){}


}
