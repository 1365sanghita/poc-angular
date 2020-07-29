import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message : String="";
  isLoggedIn : Boolean=false;

  constructor( private loginservice : LoginService) { }

  ngOnInit() {
    this.loginservice.currentMessage.subscribe(message => this.message = message);
    this.loginservice.currentLoginStatus.subscribe(isLoggedIn => this.isLoggedIn=isLoggedIn)
  }

}
