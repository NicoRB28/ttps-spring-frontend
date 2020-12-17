import { AfterViewChecked, Component, OnChanges, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EditTruck } from 'src/app/model/editTruck';
import { Truck } from 'src/app/model/truck';
import { LoginService } from '../../core/util-services/login.service';
import { UtilService } from '../../core/util-services/util.service';
import { TruckSandbox } from '../../truck/truck.sandbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewChecked {

  constructor(private sandbox: TruckSandbox,
    private loginService: LoginService,
    private router: Router,
    private utilService: UtilService) { }

  @Output()
  truck: Truck = new Truck();

  @ViewChild('formTruck')
  formTruck: TemplateRef<{}>;

  modalRef;


  ngOnInit(): void {
    this.sandbox.getUserTruck(this.loginService.getUserLoggedIn().userId).subscribe(data => {
      this.truck = data;
    });
  }

  ngAfterViewChecked():void{
    this.sandbox.getUserTruck(this.loginService.getUserLoggedIn().userId).subscribe(data => {
      this.truck = data;
    });
  }


  closeModal(event:Truck):void{
    this.truck = event;
    console.log(this.truck);
    this.modalRef.close();
  }

  submitForm(event):void{
    console.log("submit");
  }

  showModal():void{
    const options = {
      animation: true,
      centered: true,

    }
    this.sandbox.getUserTruck(this.loginService.getUserLoggedIn().userId).subscribe(data => {
      this.truck = data;
    });
    this.modalRef = this.utilService.showModal(this.formTruck,options);
  }

}