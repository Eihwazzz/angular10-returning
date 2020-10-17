import { Component, OnInit } from '@angular/core';
import { DbConectionService } from '../core/db-conection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    username: "",
    password: ""
  };

  constructor(private dbService:DbConectionService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginData);
    //this.dbService.getLogin('martinbrito1985@hotmail.com','mike4hunter')
    // this.dbService.getLogin(this.loginData.username, this.loginData.password)
    // .subscribe(data => {
    //     console.log(data);
    // });
  }

}
