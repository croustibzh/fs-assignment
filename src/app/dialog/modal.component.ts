import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../DialogData';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  adminU= "admin";
  adminP= "p@ss";
  user :string;
  pass: string;
  loggedIn: boolean;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

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