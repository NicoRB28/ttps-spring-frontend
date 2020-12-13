import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { EventSandbox } from '../event.sandbox';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[] = [];


  constructor(private sandbox: EventSandbox) { }

  ngOnInit(): void {
    this.sandbox.events$.subscribe(data => this.events = data);
    this.sandbox.getAllEvents();
  }

  // showModal():void{
  //   const options = {
  //     animation: true,
  //     centered: true,

  //   }
  //   this.modalRef = this.utilService.showModal(this.testModal,options);
  // }

  // closeModal():void {
  //   this.modalRef.close();
  // }

}
