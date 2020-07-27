import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   private username : String = "";
   private message = new BehaviorSubject<String>(this.username);
   currentMessage= this.message.asObservable();

  constructor() { }

   public setUserName( username : String) : void {
    this.message.next(username);
  }

}
