import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CreateUser } from 'src/app/model/createUser';
import { User } from 'src/app/model/user';
import { UserHttpService } from '../core/http/user-http.service';
import { LoginService } from '../core/util-services/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserSandbox {

  user$:Subject<CreateUser> = new Subject();

  editUser$:Subject<User> = new Subject();


  constructor(private http: UserHttpService,
              private router: Router,
              private loginService: LoginService,
              private toastr: ToastrService){}

  login(username:string, password:string):void{
    this.http.loging(username,password).subscribe(res => {
      this.loginService.setUserLoggedIn(res);

      if(res.type === "FoodTrucker"){
        this.toastr.success("Bienvenido FoodTrucker");
        this.router.navigate(['truckerDashboard']);
      }else{
        this.toastr.success("Bienvenido EventPlanner");
        this.router.navigate(['eventPlannerHome']);
      }
    }, error => {
      this.toastr.error("No ha sido posible iniciar sesión");
    });
  }

  register(data:CreateUser):void{
    this.http.register(data).subscribe(res => {
      this.toastr.success("Usuario creado");
      this.router.navigate(['login']);
    }, error => {
      this.toastr.error("ERROR al crear al usuario");
    });
  }

  getUser(id:number):void{
    const stopSignal$ = new Subject();
    this.http.getUser(this.loginService.getUserLoggedIn().userId)
                  .pipe(takeUntil(stopSignal$))
                  .subscribe(data => {
                    if(data === null){
                      stopSignal$.next();
                    }else{
                      this.editUser$.next(data);
                    }
                  });
  }

  updateUser(user:User):void{
    this.http.updateUser(user).subscribe(res => {
      this.editUser$.next(res);
      this.toastr.success("Se ha editado correctamente al usuario");
    }, error => {
      this.toastr.error("No ha sido posible actualizar al usaurio");
    })
  }

  closeSesion():void{
    this.loginService.setUserLoggedIn(null);
    this.router.navigate(['login']);
  }
}
