import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUser } from 'src/app/model/createUser';
import { User } from 'src/app/model/user';
import { environment } from 'src/environments/environment';


@Injectable({providedIn: 'root'})
export class UserHttpService {

  baseUrl = `${environment.backendApi}ttps-spring/`

  constructor(private http: HttpClient){}

  loging(username:string, password:string):Observable<CreateUser>{
    let header = new HttpHeaders();
    header = header.set('usuario',username);
    header = header.set('clave',password);
    return this.http.post<CreateUser>(this.baseUrl+"autenticacion",null, {headers: header});
  }

  register(data:CreateUser):Observable<CreateUser>{
    return this.http.post<CreateUser>(this.baseUrl+"usuario",data);
  }

  getUser(id:number):Observable<User>{
    let headers = new HttpHeaders();
    headers = headers.set('token',`${id}`+"123456");
    return this.http.get<User>(this.baseUrl+"/usuario/"+`${id}`,{headers: headers});
  }

  updateUser(user:User):Observable<User>{
    let headers = new HttpHeaders();
    headers = headers.set('token',`${user.id}`+ "123456");
    return this.http.put<User>(this.baseUrl + "/usuario/" + `${user.id}`,user,{headers: headers});
  }


}
