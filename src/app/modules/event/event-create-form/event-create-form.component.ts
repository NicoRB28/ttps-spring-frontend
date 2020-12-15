import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Event } from 'src/app/model/event';
import { EventSandbox } from '../event.sandbox';


@Component({
  selector: 'app-event-create-form',
  templateUrl: './event-create-form.component.html',
  styleUrls: ['./event-create-form.component.css']
})
export class EventCreateFormComponent implements OnInit {

  @Output()
  submitEvent: EventEmitter<Event> = new EventEmitter<Event>();

  @Output()
  closeEvent: EventEmitter<Event> = new EventEmitter<Event>();

  form: FormGroup;

  @Input("data")
  data: Event;

  newEvent: Event = new Event();

  constructor(private fb: FormBuilder,
              private eventSandbox: EventSandbox) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      //TODO: setear validadores
      name:[this.data.name],
      address:[this.data.address],
      province:[this.data.province],
      zipCode:[this.data.zipCode],
      state:[this.data.state],
      latitud:[this.data.latitud],
      longitud:[this.data.longitud],
      mail:[this.data.mail],
      phone:[this.data.phone],
      description:[this.data.description],
      dayAndTime:[this.data.dayAndTime],
      payment:[this.data.payment],
      city:[this.data.city],
    })
  }

  submitForm():void{
    this.setUpCreateRequest();
    //this.eventSandbox.createEvent(this.newEvent);
    this.submitEvent.emit(this.newEvent);
  }

  closeModal():void {
    this.closeEvent.emit(null);
  }

  setUpCreateRequest():void {
    this.newEvent.address = this.form.controls["address"].value;
    this.newEvent.dayAndTime = this.form.controls["dayAndTime"].value;
    this.newEvent.description = this.form.controls["description"].value;
    //TODO: ver por que no se persisten las coordenadas, termina con 0
    this.newEvent.latitud = this.form.controls["latitud"].value;
    this.newEvent.longitud = this.form.controls["longitud"].value;
    this.newEvent.mail = this.form.controls["mail"].value;
    this.newEvent.name = this.form.controls["name"].value;
    this.newEvent.payment = this.form.controls["payment"].value;
    this.newEvent.phone = this.form.controls["phone"].value;
    this.newEvent.province = this.form.controls["province"].value;
    this.newEvent.state = this.form.controls["state"].value;
    this.newEvent.zipCode = this.form.controls["zipCode"].value;
    this.newEvent.city = this.form.controls["city"].value;
  }
}
