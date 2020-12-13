import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/modules/core/util-services/util.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  @ViewChild('testModal')
  testModal: TemplateRef<{}>;

  modalRef;

  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
  }

  showModal():void{
    const options = {
      animation: true,
      centered: true,

    }
    this.modalRef = this.utilService.showModal(this.testModal,options);
  }

  closeModal():void {
    this.modalRef.close();
  }

}
