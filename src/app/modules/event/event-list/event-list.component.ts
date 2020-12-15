import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Event } from 'src/app/model/event';
import { UtilService } from '../../core/util-services/util.service';
import { EventSandbox } from '../event.sandbox';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit{

  @Input("events")
  events: Event[] = [];

  data:Event = new Event();

  modalRef;

  @ViewChild('editModal')
  editModal:TemplateRef<{}>;

  constructor(private util: UtilService,
              private eventSandbox: EventSandbox) { }

  ngOnInit(): void {
  }

  showModal(event:Event):void{
    const options = {
      animation: true,
      centered: true,
    }
    this.data = event;
    this.modalRef = this.util.showModal(this.editModal,options);
  }

  closeModalForm(event):void{
    this.modalRef.close();
  }

  submitForm(event:Event):void {
    //TODO: pegar al endpoint de update
    console.log(event);
    this.closeModalForm(event);
  }

  deleteEvent(event: Event):void{
    this.eventSandbox.deleteEvent(event.id);
  }
}
