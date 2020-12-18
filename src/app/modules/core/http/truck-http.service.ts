import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateTruck } from 'src/app/model/createTruck';
import { EditTruck } from 'src/app/model/editTruck';
import { Truck } from 'src/app/model/truck';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TruckHttpService {

  baseUrl = `${environment.backendApi}ttps-spring/truck`

  constructor(private http: HttpClient) { }

  delete(id:number):Observable<any>{
    return this.http.delete(this.baseUrl + "/" + `${id}`);
  }

  createTruck(request: CreateTruck):Observable<CreateTruck> {
    return this.http.post<CreateTruck>(this.baseUrl, request);
  }

  getUserTruck(id:number):Observable<Truck>{
    return this.http.get<Truck>(this.baseUrl+"/user/"+`${id}`);
  }

  updateTruck(data:EditTruck, id:number):Observable<Truck>{
    return this.http.put<Truck>(this.baseUrl+"/"+`${id}`, data);
  }

}
