import {  Component, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { CreateTruck } from 'src/app/model/createTruck';
import { Truck } from 'src/app/model/truck';
import { User } from 'src/app/model/user';
import { LoginService } from '../../core/util-services/login.service';
import { UtilService } from '../../core/util-services/util.service';
import { TruckSandbox } from '../../truck/truck.sandbox';
import { UserSandbox } from '../../user/user.sandbox';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private sandbox: TruckSandbox,
              private loginService: LoginService,
              private router: Router,
              private utilService: UtilService,
              private userSandbox: UserSandbox) { }

  @Output()
  truck: Truck = new Truck();

  @Output()
  user: User = new User();

  @ViewChild('formTruck')
  formTruck: TemplateRef<{}>;

  @ViewChild('formEditUser')
  formEditUser: TemplateRef<{}>;

  modalRef: NgbModalRef;


  ngOnInit(): void {

    this.userSandbox.editUser$.subscribe(data => this.user = data);
    this.userSandbox.getUser(this.loginService.getUserLoggedIn().userId);

    this.sandbox.getUserTruck(this.loginService.getUserLoggedIn().userId).subscribe(data => {
      this.truck = data;
    });
  }

  closeModal(event:Truck):void{
    this.truck = event;
    this.modalRef.close();
  }

  close(event):void{
    this.modalRef.close();
  }

  showModalEdit():void{
    const options = {
      animation: true,
      centered: true,
    }
    this.userSandbox.getUser(this.loginService.getUserLoggedIn().userId);
    this.modalRef = this.utilService.showModal(this.formEditUser,options);
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

  submitEditForm(user:User):void{
    this.userSandbox.updateUser(user);
    this.modalRef.close();
  }

  submitCreate(createRequest:CreateTruck):void{
    this.sandbox.createTruck(createRequest);
    this.modalRef.close();
  }

  edit(request:CreateTruck):void{
    this.sandbox.updateTruck(request, this.truck.id);
    this.modalRef.close();
  }

  delete(truck:Truck):void{
    this.sandbox.delete(truck.id);
    this.modalRef.close();
  }
}
