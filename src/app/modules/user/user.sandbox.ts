import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CreateUser } from 'src/app/model/createUser';
import { UserHttpService } from '../core/http/user-http.service';
import { LoginService } from '../core/util-services/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserSandbox {

  user$:Subject<CreateUser> = new Subject();

  constructor(private http: UserHttpService,
              private router: Router,
              private loginService: LoginService){}

  login(username:string, password:string):void{
    this.http.loging(username,password).subscribe(res => {
      this.loginService.setUserLoggedIn(res);
      this.router.navigate(['events']);
    }, error => {
      alert("No ha sido posible iniciar sesión" );
    });
  }

  register(data:CreateUser):void{
    this.http.register(data).subscribe(res => {
      alert("Usuario Creado");
      this.router.navigate(['login']);
    }, errro => {
      alert("No se ha podido crear el usuario");
    });
  }
}
