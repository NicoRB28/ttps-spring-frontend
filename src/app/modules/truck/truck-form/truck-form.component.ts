import {  Component,  EventEmitter,  Input,  OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateTruck } from 'src/app/model/createTruck';
import { Truck } from 'src/app/model/truck';
import { takeUntil, tap } from 'rxjs/operators';
import { LoginService } from '../../core/util-services/login.service';
import { TruckSandbox } from '../truck.sandbox';
import { Subject } from 'rxjs';
import { EventModule } from '../../event/event.module';
import { Event } from 'src/app/model/event';

@Component({
  selector: 'app-truck-form',
  templateUrl: './truck-form.component.html',
  styleUrls: ['./truck-form.component.css']
})
export class TruckFormComponent implements OnInit{

  form: FormGroup;

  @Input("truck")
  truck: Truck = new Truck();

  @Output()
  closeEvent: EventEmitter<Truck> = new EventEmitter();

  @Output()
  submitEvent: EventEmitter<CreateTruck> = new EventEmitter();

  @Output()
  editEvent: EventEmitter<CreateTruck> = new EventEmitter();

  @Output()
  deleteEvent: EventEmitter<Truck> = new EventEmitter();

  createRequest: CreateTruck = new CreateTruck();

  newTruck: Truck = new Truck();

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private sandbox: TruckSandbox) { }



  ngOnInit(): void {
      this.sandbox.truck$.subscribe(data =>{
        this.truck = data;
      });
      const stopSignal$ = new Subject();
      this.sandbox.getUserTruck(this.loginService.getUserLoggedIn().userId)
                  .pipe(takeUntil(stopSignal$))
                  .subscribe(data => {
                    if(data === null){
                      stopSignal$.next();
                    }else{
                      this.form.patchValue(data);
                    }
                  });
      this.form = this.fb.group({
        name:[this.truck.name],
        description:[this.truck.description],
        uri:[this.truck.uri],
        whatsapp:[this.truck.whatsapp],
        instagram:[this.truck.instagram],
        twitter:[this.truck.twitter ],
        tag1:[this.truck.tags.pop()],
        tag2:[this.truck.tags.pop()],
        tag3:[this.truck.tags.pop()],
      });

    }

    submitForm(){
      this.setRequestValues();
      //this.sandbox.createTruck(this.createRequest);
      this.submitEvent.emit(this.createRequest);
      this.closeModal();
    }

    edit():void{
      this.setRequestValues();
      this.editEvent.emit(this.createRequest);
    }

    setRequestValues():void{
      this.createRequest.name = this.form.controls["name"].value;
      this.createRequest.whatsapp = this.form.controls["whatsapp"].value
      this.createRequest.description = this.form.controls["description"].value
      this.createRequest.instagram = this.form.controls["instagram"].value
      this.createRequest.twitter = this.form.controls["twitter"].value
      this.createRequest.uri = this.form.controls["uri"].value
      this.createRequest.ownerId = this.loginService.getUserLoggedIn().userId;
      this.createRequest.tags = [];
      this.createRequest.tags.push(this.form.controls["tag1"].value);
      this.createRequest.tags.push(this.form.controls["tag2"].value);
      this.createRequest.tags.push(this.form.controls["tag3"].value);
    }

    delete():void{
      this.sandbox.getUserTruck(this.loginService.getUserLoggedIn().userId).subscribe(data => {
        this.newTruck = data;
      });
      this.deleteEvent.emit(this.truck);
    }

    closeModal():void{
      this.sandbox.getUserTruck(this.loginService.getUserLoggedIn().userId).subscribe(data => {
        this.newTruck = data;
      });
      this.closeEvent.emit(this.newTruck);
    }
}



