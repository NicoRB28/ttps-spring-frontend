import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Event } from 'src/app/model/event';
import { UtilService } from '../../core/util-services/util.service';
import { EventSandbox } from '../event.sandbox';

@Component({
  selector: 'app-event-dashboard',
  templateUrl: './event-dashboard.component.html',
  styleUrls: ['./event-dashboard.component.css']
})
export class EventDashboardComponent implements OnInit {


  @ViewChild('createEvent')
  createEvent: TemplateRef<{}>;

  modalRef;

  @Output()
  events: Event[] = [];

  data:Event = new Event();

  constructor(private utilService: UtilService,
              private eventSandbox: EventSandbox) { }

  ngOnInit(): void {
    this.eventSandbox.events$.subscribe(data => this.events = data);
    this.eventSandbox.getAllEvents();
  }

  showModal():void{
    const options = {
      animation: true,
      centered: true,

    }
    this.modalRef = this.utilService.showModal(this.createEvent,options);
  }

  closeModal(event:Event):void {
    this.modalRef.close();
  }
  submitForm(event:Event):void{
    this.eventSandbox.createEvent(event);
    this.eventSandbox.getAllEvents();
    this.modalRef.close();
  }
}
