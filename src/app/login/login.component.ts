import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public  username : String="";
 public isLoggedIn : Boolean = false;
 public password : String; 


  constructor( private loginservice : LoginService, private router : Router) {   
  }

  ngOnInit() {
    this.loginservice.currentLoginStatus.subscribe(isLoggedIn => this.isLoggedIn=isLoggedIn)
  }
 
  fireEvent(event){
    
    if(this.username.trim() !="" && this.password.trim() != ""){
      this.loginservice.setUserName(`${this.username}`);
      this.loginservice.setLoginStatus(true);
      // this way we are approaching because we are setting username from this 
      this.router.navigate(['home']);
    }
  }
}
