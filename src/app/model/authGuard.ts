import {Injectable} from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/modules/core/util-services/login.service';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authService: LoginService, private router: Router, private toastr: ToastrService){}


  canActivate(): boolean{
    if(!this.authService.isLogged()){
      this.toastr.error("No se ha logeado en el sistema");
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
