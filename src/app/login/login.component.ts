import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public  username : String ;

  constructor( private loginservice : LoginService) {   
  }

  ngOnInit() {
  }
 
  fireEvent(event){
    this.username = (document.getElementById("username") as HTMLInputElement).value
    this.loginservice.setUserName(`welcome ${this.username}`);
  }
}
