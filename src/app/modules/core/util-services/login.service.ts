import { Injectable} from '@angular/core';
import { CreateUser } from 'src/app/model/createUser';



@Injectable({providedIn: 'root'})
export class LoginService {

  private isUserLoggedIn;
  public userLogged: CreateUser;

  constructor(){
    this.isUserLoggedIn = false;
  }

  isLogged(){
    return this.isUserLoggedIn;
  }

  setUserLoggedIn(user:CreateUser){
    this.isUserLoggedIn = true;
    this.userLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getUserLoggedIn(){
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}
