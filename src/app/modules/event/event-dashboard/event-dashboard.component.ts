import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UtilService } from '../../core/util-services/util.service';

@Component({
  selector: 'app-event-dashboard',
  templateUrl: './event-dashboard.component.html',
  styleUrls: ['./event-dashboard.component.css']
})
export class EventDashboardComponent implements OnInit {


  @ViewChild('createEvent')
  createEvent: TemplateRef<{}>;

  modalRef;

  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
  }

  showModal():void{
    const options = {
      animation: true,
      centered: true,

    }
    this.modalRef = this.utilService.showModal(this.createEvent,options);
  }

  closeModalForm(event:string):void {
    console.log("cerramos");
    this.modalRef.close();
  }
}
