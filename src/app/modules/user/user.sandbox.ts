import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUser } from 'src/app/model/createUser';
import { UserHttpService } from '../core/http/user-http.service';

@Injectable({
  providedIn: 'root'
})
export class UserSandbox {

  constructor(private http: UserHttpService,
              private router: Router){}

  login(username:string, password:string):void{
    this.http.loging(username,password).subscribe(res => {
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
