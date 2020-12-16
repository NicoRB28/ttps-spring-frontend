import {Injectable} from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from 'src/app/modules/core/util-services/login.service';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authService: LoginService, private router: Router){}


  canActivate(): boolean{
    if(!this.authService.isLogged()){
      alert('No se ha logeado');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
