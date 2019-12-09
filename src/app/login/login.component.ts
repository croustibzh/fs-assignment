import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  adminU= "admin";
  adminP= "p@ss";
  user :string;
  pass: string;
  loggedIn: boolean;
  constructor() { }
  
  onClick(usr:string, passwrd:string ){

    console.log(this.user);
    console.log(this.pass);
    if (usr == this.adminU && this.pass == this.adminP){
      this.loggedIn = true;
      console.log("logged in");
    } else { console.log("didn't log in ");}

    
    console.log("Logged in : " + this.loggedIn);
  }
  ngOnInit() {
  }

}
