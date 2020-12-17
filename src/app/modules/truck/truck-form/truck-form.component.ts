import {  Component,  EventEmitter,  Input,  OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateTruck } from 'src/app/model/createTruck';
import { Truck } from 'src/app/model/truck';

import { LoginService } from '../../core/util-services/login.service';
import { TruckSandbox } from '../truck.sandbox';

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

  createRequest: CreateTruck = new CreateTruck();

  newTruck: Truck = new Truck();

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private sandbox: TruckSandbox) { }



  ngOnInit(): void {
      this.form = this.fb.group({
        name:[this.truck.name],
        description:[this.truck.description],
        uri:[this.truck.uri],
        whatsapp:[this.truck.whatsapp],
        instagram:[this.truck.instagram],
        twitter:[this.truck.twitter ],
        tag1:[''],
        tag2:[''],
        tag3:[''],
      });

    }

    submitForm(){
      this.setRequestValues();
      this.sandbox.createTruck(this.createRequest);
      this.closeModal();
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


    closeModal():void{
      this.sandbox.getUserTruck(this.loginService.getUserLoggedIn().userId).subscribe(data => {
        this.newTruck = data;
        this.closeEvent.emit(this.newTruck);
      })
    }
}



