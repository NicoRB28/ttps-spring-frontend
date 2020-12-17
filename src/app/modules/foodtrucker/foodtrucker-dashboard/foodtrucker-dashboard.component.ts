import { Component, OnChanges, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Truck } from 'src/app/model/truck';
import { LoginService } from '../../core/util-services/login.service';
import { UtilService } from '../../core/util-services/util.service';
import { TruckSandbox } from '../../truck/truck.sandbox';

@Component({
  selector: 'app-foodtrucker-dashboard',
  templateUrl: './foodtrucker-dashboard.component.html',
  styleUrls: ['./foodtrucker-dashboard.component.css']
})
export class FoodtruckerDashboardComponent implements OnInit, OnChanges {



  constructor(private sandbox: TruckSandbox,
              private loginService: LoginService,
              private router: Router,
              private utilService: UtilService) { }

  ngOnInit(): void {
  }

  ngOnChanges():void {

  }

  goToForm():void {
      this.router.navigate(['truckForm']);
  }

}
