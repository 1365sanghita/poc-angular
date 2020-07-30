import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public  username : String;
 public isLoggedIn : Boolean = false;
 public password :String; 


  constructor( private loginservice : LoginService) {   
  }

  ngOnInit() {
    this.loginservice.currentLoginStatus.subscribe(isLoggedIn => this.isLoggedIn=isLoggedIn)
  }
 
  fireEvent(event){
    
    if(this.username.trim() !="" && this.password.trim() != ""){
      this.loginservice.setUserName(`${this.username}`);
      this.loginservice.setLoginStatus(true);
    }
  }
}
