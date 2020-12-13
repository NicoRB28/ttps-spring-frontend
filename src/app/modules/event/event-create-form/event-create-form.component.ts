import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Event } from 'src/app/model/event';


@Component({
  selector: 'app-event-create-form',
  templateUrl: './event-create-form.component.html',
  styleUrls: ['./event-create-form.component.css']
})
export class EventCreateFormComponent implements OnInit {

  @Output()
  submitEvent: EventEmitter<string> = new EventEmitter<string>();

  form: FormGroup;

  newEvent: Event;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name:[''],
      address:[''],
      province:[''],
      zipCode:[''],
      state:[''],
      latitud:[],
      longitud:[],
      mail:[''],
      phone:[''],
      description:[''],
      dayAndTime:[],
      payment:[''],
    })
  }

  submitForm():void{
    console.log("la direccion es:");
    console.log(this.form.getRawValue());
    this.submitEvent.emit("hola");
  }

  closeModal():void {
    this.submitEvent.emit("chau");
  }
}
