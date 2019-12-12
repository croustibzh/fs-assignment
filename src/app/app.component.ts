import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatToolbar} from '@angular/material';
import { ModalComponent } from './dialog/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(public dialog : MatDialog){

  }


openDialog(): void {
  const dialogRef = this.dialog.open(ModalComponent, {
    width: '40%',
    height: '30%',
    direction: "ltr",
    autoFocus:true,
  });
}
}