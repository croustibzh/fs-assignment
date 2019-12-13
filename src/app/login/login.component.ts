import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

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
  login: boolean;
  hide:boolean = true;



  constructor(public dialogRef: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public router: Router) { }


  onClick(){

    console.log(this.user);
    console.log(this.pass);
    if (this.user == this.adminU && this.pass == this.adminP){
      this.login = true;
      this.isAuthenticated();
      this.dialogRef.close(this.login);
    } else {
      this.login = false;
      console.log("didn't log in ");
      this.dialogRef.close(this.login);
    }
  }

  isAuthenticated(){
    const promise = new Promise(
      (resolve, reject) =>{
        resolve(this.login);
      }
    );
    return promise;
  }
  ngOnInit() {
  }

}
