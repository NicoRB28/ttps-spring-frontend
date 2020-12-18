import {Injectable} from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/modules/core/util-services/login.service';

@Injectable()
export class EventplannerPermision implements CanActivate{

  constructor(private authService: LoginService,
              private router: Router,
              private toastr: ToastrService){}


  canActivate():boolean {
    if(this.authService.getUserLoggedIn().type === "EventPlanner"){
      this.toastr.error("No puedes acceder a este recurso");
      this.router.navigate(['foodtrucker']);
      return false;
    }
    return true;
  }

}
