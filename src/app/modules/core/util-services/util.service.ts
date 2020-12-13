import { Injectable, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({providedIn: 'root'})
export class UtilService {

  constructor(private ngbModalService: NgbModal){}

  public showModal(body: TemplateRef<{}>, opts:NgbModalOptions): NgbModalRef {
    return this.ngbModalService.open(body);
  }
}
