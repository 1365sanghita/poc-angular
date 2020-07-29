import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   private username : String = "";
   private isLoggedin :Boolean =false;

   private message = new BehaviorSubject<String>(this.username);
   currentMessage= this.message.asObservable();

   private status=new BehaviorSubject<Boolean>(this.isLoggedin);
   currentLoginStatus= this.status.asObservable();

  constructor() { }

   public setUserName( username : String) : void {
    this.message.next(username);
  }
   

  public setLoginStatus( isLoggedin:Boolean) : void{
    this. status.next(isLoggedin);

  }
}
