import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { CreateTruck } from 'src/app/model/createTruck';
import { Truck } from 'src/app/model/truck';
import { TruckHttpService } from '../core/http/truck-http.service';

@Injectable({
  providedIn: 'root'
})
export class TruckSandbox {

  truck$: Subject<Truck> = new Subject();

  constructor(private http: TruckHttpService,
              private toastr: ToastrService){}

  createTruck(request:CreateTruck):void {
    this.http.createTruck(request).subscribe(res =>{
      this.toastr.success("FoodTruck creado");
    },error => {
      this.toastr.error("Error al crear el Truck");
    });
  }

  getUserTruck(id:number):Observable<Truck>{
    return this.http.getUserTruck(id);
  }

  updateTruck(data, id):void{
    this.http.updateTruck(data, id).subscribe(res => {
      this.truck$.next(res);
    });
  }
}
