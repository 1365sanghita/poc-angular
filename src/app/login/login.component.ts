import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public  username : String ;
 public isLoggedIn : Boolean = false;

  constructor( private loginservice : LoginService) {   
  }

  ngOnInit() {
    this.loginservice.currentLoginStatus.subscribe(isLoggedIn => this.isLoggedIn=isLoggedIn)
  }
 
  fireEvent(event){
    this.username = (document.getElementById("username") as HTMLInputElement).value;
    if(this.username.trim() !=""){
      this.loginservice.setUserName(`${this.username}`);
      this.loginservice.setLoginStatus(true);
    }
  }
}
